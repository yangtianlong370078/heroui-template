"use client";

import {
  ArrowShapeTurnUpLeft,
  ArrowShapeTurnUpRight,
  Bell,
  Bookmark,
  ChevronDown,
  ChevronRight,
  Clock,
  Copy,
  Ellipsis,
  EnvelopeOpen,
  FaceSmile,
  Link,
  ListCheck,
  Magnifier,
  Pin,
  Text,
} from "@gravity-ui/icons";
import {
  Button,
  Description,
  EmptyState,
  Label,
  ListBox,
  ScrollShadow,
  SearchField,
  Separator,
  Tooltip,
} from "@heroui/react";
import emojisList from "emojibase-data/en/compact.json";
import React, {useState} from "react";

import {
  EMOJI_CATEGORIES,
  EMOJI_SKIN_TONES,
  EmojiPicker,
  EmojiReactionButton,
  Sheet,
} from "@heroui-pro/react";

type Emoji = (typeof emojisList)[0];
const emojis: Emoji[] = emojisList.filter(
  (e) => typeof e.label === "string" && !e.label.startsWith("regional indicator"),
);

const QUICK_REACTIONS = ["🚀", "🙌", "👍", "🤔", "🙏"];
const messageActionsSnaps = ["355px", 1] as const;

export default function SheetSlackMessageActionsDemo() {
  const [snap, setSnap] = React.useState<string | number | null>(messageActionsSnaps[0]);
  const [moreExpanded, setMoreExpanded] = useState(false);
  const [reactions, setReactions] = useState<Record<string, {count: number; selected: boolean}>>(
    {},
  );

  const toggleReaction = (emoji: string) => {
    setReactions((prev) => {
      const existing = prev[emoji];

      if (existing) {
        const selected = !existing.selected;
        const count = selected ? existing.count + 1 : existing.count - 1;

        if (count < 1) {
          const {[emoji]: _, ...rest} = prev;

          return rest;
        }

        return {...prev, [emoji]: {count, selected}};
      }

      return {...prev, [emoji]: {count: 1, selected: true}};
    });
  };

  const addReaction = (key: string | number | null) => {
    if (key == null) return;
    const unicode = String(key);

    setReactions((prev) => {
      if (prev[unicode]) {
        return {...prev, [unicode]: {count: prev[unicode].count + 1, selected: true}};
      }

      return {...prev, [unicode]: {count: 1, selected: true}};
    });
  };

  return (
    <Sheet
      activeSnapPoint={snap}
      snapPoints={messageActionsSnaps as unknown as (number | string)[]}
      onActiveSnapPointChange={setSnap}
    >
      <Sheet.Trigger>
        <Button variant="secondary">Slack message actions</Button>
      </Sheet.Trigger>
      <Sheet.Backdrop>
        <Sheet.Content className="mx-auto max-h-[95vh] max-w-[420px]">
          <Sheet.Dialog>
            <Sheet.Handle />
            <Sheet.Body className="px-0 pt-0">
              <div className="flex items-center justify-center gap-2 px-4 pb-3 pt-1">
                {QUICK_REACTIONS.map((emoji) => {
                  const reaction = reactions[emoji];
                  const isSelected = reaction?.selected ?? false;

                  return (
                    <EmojiReactionButton
                      key={emoji}
                      isSelected={isSelected}
                      size="lg"
                      onChange={() => toggleReaction(emoji)}
                    >
                      <EmojiReactionButton.Emoji>{emoji}</EmojiReactionButton.Emoji>
                      {reaction != null && reaction.count > 0 ? (
                        <EmojiReactionButton.Count>{reaction.count}</EmojiReactionButton.Count>
                      ) : null}
                    </EmojiReactionButton>
                  );
                })}

                <EmojiPicker
                  aria-label="Add reaction"
                  size="md"
                  onChange={(value) => {
                    const unicode = Array.isArray(value) ? value[0] : value;

                    if (unicode == null) return;
                    addReaction(unicode);
                  }}
                >
                  <Button
                    isIconOnly
                    aria-label="Add reaction"
                    className="emoji-reaction-button emoji-reaction-button--lg min-h-0 min-w-0"
                    size="sm"
                    variant="ghost"
                  >
                    <FaceSmile className="size-5" />
                  </Button>
                  <EmojiPicker.Popover>
                    <EmojiPicker.Content>
                      <SearchField autoFocus aria-label="Search emoji" variant="secondary">
                        <SearchField.Group>
                          <SearchField.SearchIcon />
                          <SearchField.Input placeholder="Search emoji..." />
                          <EmojiPicker.SkinTonePicker>
                            <EmojiPicker.SkinToneTrigger className="mr-1" />
                            <EmojiPicker.SkinToneContent>
                              {EMOJI_SKIN_TONES.map((tone) => (
                                <EmojiPicker.SkinToneOption
                                  key={tone.id}
                                  aria-label={tone.label}
                                  id={tone.id}
                                >
                                  {tone.emoji}
                                </EmojiPicker.SkinToneOption>
                              ))}
                            </EmojiPicker.SkinToneContent>
                          </EmojiPicker.SkinTonePicker>
                        </SearchField.Group>
                      </SearchField>
                      <EmojiPicker.Grid
                        items={emojis}
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
                            {EMOJI_CATEGORIES.map(({emoji, label}) => (
                              <Tooltip key={emoji} delay={0}>
                                <Tooltip.Trigger tabIndex={-1}>
                                  <Button
                                    isIconOnly
                                    aria-label={label}
                                    className="hover:bg-muted/20 flex size-6 shrink-0 items-center justify-center rounded-full rounded-md"
                                    variant="ghost"
                                  >
                                    <span className="text-base" tabIndex={-1}>
                                      {emoji}
                                    </span>
                                  </Button>
                                </Tooltip.Trigger>
                                <Tooltip.Content placement="top">
                                  <p>{label}</p>
                                </Tooltip.Content>
                              </Tooltip>
                            ))}
                          </div>
                        </ScrollShadow>
                      </EmojiPicker.Footer>
                    </EmojiPicker.Content>
                  </EmojiPicker.Popover>
                </EmojiPicker>
              </div>

              <div className="grid grid-cols-3 gap-2 px-4 pb-3">
                <Button
                  className="flex h-auto w-full flex-col gap-1.5 rounded-xl py-3"
                  variant="tertiary"
                >
                  <ArrowShapeTurnUpLeft className="size-5" />
                  <span className="text-xs font-medium">Reply</span>
                </Button>
                <Button
                  className="flex h-auto w-full flex-col gap-1.5 rounded-xl py-3"
                  variant="tertiary"
                >
                  <ArrowShapeTurnUpRight className="size-5" />
                  <span className="text-xs font-medium">Forward</span>
                </Button>
                <Button
                  className="flex h-auto w-full flex-col gap-1.5 rounded-xl py-3"
                  variant="tertiary"
                >
                  <Bookmark className="size-5" />
                  <span className="text-xs font-medium">Save</span>
                </Button>
              </div>

              <ListBox
                aria-label="Message actions"
                className="w-full"
                selectionMode="none"
                onAction={(key) => {
                  if (key === "more-actions") {
                    setMoreExpanded(!moreExpanded);
                  }
                }}
              >
                <ListBox.Section>
                  <ListBox.Item id="mark-unread" textValue="Mark Unread">
                    <EnvelopeOpen className="text-muted size-5 shrink-0" />
                    <Label>Mark Unread</Label>
                  </ListBox.Item>
                  <ListBox.Item id="remind-me" textValue="Remind Me">
                    <Clock className="text-muted size-5 shrink-0" />
                    <Label>Remind Me</Label>
                  </ListBox.Item>
                  <ListBox.Item id="get-reply-notifications" textValue="Get Reply Notifications">
                    <Bell className="text-muted size-5 shrink-0" />
                    <Label>Get Reply Notifications</Label>
                  </ListBox.Item>
                </ListBox.Section>
                <Separator />
                <ListBox.Section>
                  <ListBox.Item id="copy-link" textValue="Copy Link to Message">
                    <Link className="text-muted size-5 shrink-0" />
                    <Label>Copy Link to Message</Label>
                  </ListBox.Item>
                  <ListBox.Item id="copy-message" textValue="Copy Message">
                    <Copy className="text-muted size-5 shrink-0" />
                    <Label>Copy Message</Label>
                  </ListBox.Item>
                </ListBox.Section>
                <Separator />
                <ListBox.Section>
                  <ListBox.Item id="more-actions" textValue="More Actions">
                    <Ellipsis className="text-muted size-5 shrink-0" />
                    <Label>More Actions</Label>
                    {moreExpanded ? (
                      <ChevronDown className="text-muted ms-auto size-4 shrink-0" />
                    ) : (
                      <ChevronRight className="text-muted ms-auto size-4 shrink-0" />
                    )}
                  </ListBox.Item>
                  {moreExpanded ? (
                    <>
                      <ListBox.Item id="add-to-list" textValue="Add to List">
                        <ListCheck className="text-muted size-5 shrink-0" />
                        <Label>Add to List</Label>
                      </ListBox.Item>
                      <ListBox.Item id="pin-to-channel" textValue="Pin to Channel">
                        <Pin className="text-muted size-5 shrink-0" />
                        <Label>Pin to Channel</Label>
                      </ListBox.Item>
                      <ListBox.Item id="select-text" textValue="Select Text">
                        <Text className="text-muted size-5 shrink-0" />
                        <Label>Select Text</Label>
                      </ListBox.Item>
                      <ListBox.Item id="link-existing" textValue="Link existing...">
                        <Link className="text-muted size-5 shrink-0" />
                        <div className="flex flex-col">
                          <Label>Link existing...</Label>
                          <Description>Links an existing issue or project in Linear</Description>
                        </div>
                      </ListBox.Item>
                      <ListBox.Item id="turn-into-poll" textValue="Turn question into poll">
                        <ListCheck className="text-muted size-5 shrink-0" />
                        <div className="flex flex-col">
                          <Label>Turn question into poll</Label>
                          <Description>Turns a message into a Simple Poll question</Description>
                        </div>
                      </ListBox.Item>
                    </>
                  ) : null}
                </ListBox.Section>
              </ListBox>
            </Sheet.Body>
          </Sheet.Dialog>
        </Sheet.Content>
      </Sheet.Backdrop>
    </Sheet>
  );
}
