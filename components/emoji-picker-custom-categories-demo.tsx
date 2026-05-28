"use client";

import {EmojiPicker, EMOJI_SKIN_TONES} from "@heroui-pro/react";
import {useState} from "react";

import {emojiItems} from "./emoji-picker-data";

const CUSTOM_CATEGORIES = ["smileys-emotion", "food-drink"] as const;
const filteredEmojis = emojiItems.filter(
  (e) => CUSTOM_CATEGORIES.includes(e.category as (typeof CUSTOM_CATEGORIES)[number]),
);

export default function EmojiPickerCustomCategoriesDemo() {
  const [skinTone, setSkinTone] = useState("default");

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <p className="text-sm text-default-500">Only Smileys &amp; Emotion and Food &amp; Drink categories</p>
      <EmojiPicker defaultSelectedKey="😀">
        <EmojiPicker.Trigger>
          <EmojiPicker.Value />
        </EmojiPicker.Trigger>
        <EmojiPicker.Popover>
          <EmojiPicker.Content>
            <EmojiPicker.Grid
              items={filteredEmojis}
              aria-label="Emoji grid"
              renderEmptyState={() => <div className="emoji-picker__empty">No emojis found</div>}
            >
              {(item) => (
                <EmojiPicker.Item
                  key={item.emoji}
                  id={item.emoji}
                  aria-label={item.name}
                  textValue={item.name}
                >
                  {item.emoji}
                </EmojiPicker.Item>
              )}
            </EmojiPicker.Grid>
            <EmojiPicker.Footer>
              <EmojiPicker.SkinTonePicker value={skinTone} onChange={setSkinTone}>
                <EmojiPicker.SkinToneTrigger />
                <EmojiPicker.SkinToneContent>
                  {EMOJI_SKIN_TONES.map((tone) => (
                    <EmojiPicker.SkinToneOption key={tone.id} id={tone.id}>
                      {tone.emoji}
                    </EmojiPicker.SkinToneOption>
                  ))}
                </EmojiPicker.SkinToneContent>
              </EmojiPicker.SkinTonePicker>
            </EmojiPicker.Footer>
          </EmojiPicker.Content>
        </EmojiPicker.Popover>
      </EmojiPicker>
    </div>
  );
}
