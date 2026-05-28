"use client";

import Magnifier from "@gravity-ui/icons/Magnifier";
import {Button, EmptyState, ScrollShadow, SearchField, Tooltip} from "@heroui/react";
import emojisList from "emojibase-data/en/compact.json";
import React, {useMemo, useRef, useState} from "react";
import {Size} from "react-aria-components/Virtualizer";

import {EMOJI_SKIN_TONES, EmojiPicker, Sheet} from "@heroui-pro/react";

type Emoji = (typeof emojisList)[0];
const emojis: Emoji[] = emojisList.filter(
  (e) => typeof e.label === "string" && !e.label.startsWith("regional indicator"),
);

const CATEGORY_GROUP_MAP: Record<string, number> = {
  activities: 6,
  "animals-nature": 3,
  flags: 9,
  "food-drink": 4,
  objects: 7,
  "people-body": 1,
  "smileys-emotion": 0,
  symbols: 8,
  "travel-places": 5,
};

const SHEET_EMOJI_LIMIT = 200;
const emojiSheetSnaps = ["355px", 1] as const;

const CUSTOM_EMOJI_CATEGORIES = [
  {emoji: "😀", id: "smileys-emotion", label: "Smileys & Emotion"},
  {emoji: "👋", id: "people-body", label: "People & Body"},
  {emoji: "🐱", id: "animals-nature", label: "Animals & Nature"},
  {emoji: "🍕", id: "food-drink", label: "Food & Drink"},
  {emoji: "⚽", id: "activities", label: "Activities"},
  {emoji: "🚗", id: "travel-places", label: "Travel & Places"},
  {emoji: "💡", id: "objects", label: "Objects"},
  {emoji: "🔣", id: "symbols", label: "Symbols"},
  {emoji: "🏁", id: "flags", label: "Flags"},
] as const;

function EmojiSheetContent({onEmojiSelect}: {onEmojiSelect?: (emoji: string) => void}) {
  const [skinTone, setSkinTone] = useState("default");
  const gridRef = useRef<HTMLDivElement>(null);

  const displayEmojis = useMemo(() => {
    const skinIndex = EMOJI_SKIN_TONES.findIndex((t) => t.id === skinTone) - 1;
    const base = emojis.slice(0, SHEET_EMOJI_LIMIT);

    if (skinIndex < 0) return base;

    return base.map((emoji) => {
      const skin = emoji.skins?.[skinIndex];

      if (!skin) return emoji;

      return {...emoji, unicode: skin.unicode};
    });
  }, [skinTone]);

  const categoryStartIndices = useMemo(() => {
    const indices: Record<string, number> = {};

    for (const [categoryId, groupNum] of Object.entries(CATEGORY_GROUP_MAP)) {
      const idx = displayEmojis.findIndex((e) => e.group === groupNum);

      if (idx !== -1) indices[categoryId] = idx;
    }

    return indices;
  }, [displayEmojis]);

  const scrollToCategory = (categoryId: string) => {
    const grid = gridRef.current;

    if (!grid) return;
    const index = categoryStartIndices[categoryId];

    if (index === undefined) return;
    const itemSize = 48;
    const itemsPerRow = Math.floor(grid.clientWidth / itemSize);
    const scrollTop = Math.floor(index / itemsPerRow) * itemSize;

    grid.scrollTo({behavior: "smooth", top: scrollTop});
  };

  return (
    <EmojiPicker
      aria-label="Emoji sheet picker"
      className="h-full min-h-0"
      size="lg"
      onSelectionChange={(key) => {
        if (key != null) onEmojiSelect?.(String(key));
      }}
    >
      <EmojiPicker.Content className="h-full">
        <SearchField aria-label="Search emoji" variant="secondary">
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input placeholder="Search" />
            <EmojiPicker.SkinTonePicker value={skinTone} onChange={setSkinTone}>
              <EmojiPicker.SkinToneTrigger className="mr-1" />
              <EmojiPicker.SkinToneContent>
                {EMOJI_SKIN_TONES.map((tone) => (
                  <EmojiPicker.SkinToneOption key={tone.id} aria-label={tone.label} id={tone.id}>
                    {tone.emoji}
                  </EmojiPicker.SkinToneOption>
                ))}
              </EmojiPicker.SkinToneContent>
            </EmojiPicker.SkinTonePicker>
          </SearchField.Group>
        </SearchField>
        <EmojiPicker.Grid
          ref={gridRef}
          items={displayEmojis}
          layoutOptions={{
            maxItemSize: new Size(48, 48),
            minItemSize: new Size(48, 48),
          }}
          renderEmptyState={() => (
            <EmptyState className="flex h-full min-h-20 flex-1 flex-col items-center justify-center gap-2">
              <Magnifier className="text-muted size-5" />
              No emoji found.
            </EmptyState>
          )}
        >
          {(item) => (
            <EmojiPicker.Item
              id={String(item.unicode)}
              textValue={`${item.label || ""} ${Array.isArray(item.tags) ? item.tags.join(" ") : ""}`}
            >
              {item.unicode}
            </EmojiPicker.Item>
          )}
        </EmojiPicker.Grid>
        <EmojiPicker.Footer>
          <ScrollShadow hideScrollBar orientation="horizontal">
            <div className="flex items-center gap-1 overflow-visible px-2 py-0.5 pr-3">
              {CUSTOM_EMOJI_CATEGORIES.map(({emoji, id, label}) => (
                <Tooltip key={id} delay={0}>
                  <Button
                    excludeFromTabOrder
                    isIconOnly
                    aria-label={label}
                    className="hover:bg-muted/20 text-muted flex size-8 shrink-0 items-center justify-center rounded-full rounded-md"
                    variant="ghost"
                    onPress={() => scrollToCategory(id)}
                  >
                    <span className="text-base" tabIndex={-1}>
                      {emoji}
                    </span>
                  </Button>
                  <Tooltip.Content placement="top">
                    <p>{label}</p>
                  </Tooltip.Content>
                </Tooltip>
              ))}
            </div>
          </ScrollShadow>
        </EmojiPicker.Footer>
      </EmojiPicker.Content>
    </EmojiPicker>
  );
}

export default function SheetEmojiPickerSheetDemo() {
  const [snap, setSnap] = React.useState<string | number | null>(emojiSheetSnaps[0]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedEmoji, setSelectedEmoji] = React.useState("😀");

  return (
    <Sheet
      isDetached
      activeSnapPoint={snap}
      isOpen={isOpen}
      snapPoints={emojiSheetSnaps as unknown as (number | string)[]}
      onActiveSnapPointChange={setSnap}
      onOpenChange={setIsOpen}
    >
      <Sheet.Trigger>
        <Button variant="secondary">
          <span className="text-lg">{selectedEmoji}</span> Emoji Picker
        </Button>
      </Sheet.Trigger>
      <Sheet.Backdrop>
        <Sheet.Content className="mx-auto max-h-[95vh] max-w-[420px]">
          <Sheet.Dialog>
            <Sheet.Handle />
            <Sheet.Body className="min-h-0 overflow-hidden p-0">
              <EmojiSheetContent
                onEmojiSelect={(emoji) => {
                  setSelectedEmoji(emoji);
                  setIsOpen(false);
                }}
              />
            </Sheet.Body>
          </Sheet.Dialog>
        </Sheet.Content>
      </Sheet.Backdrop>
    </Sheet>
  );
}
