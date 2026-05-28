"use client";

import {EmojiPicker, EMOJI_SKIN_TONES} from "@heroui-pro/react";

import {emojiItems} from "./emoji-picker-data";

const SIZES = ["sm", "md", "lg"] as const;

export default function EmojiPickerSizesDemo() {
  return (
    <div className="flex flex-wrap items-start gap-10 p-6">
      {SIZES.map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-wider text-default-500">{size}</span>
          <EmojiPicker defaultSelectedKey="😀" size={size}>
            <EmojiPicker.Trigger>
              <EmojiPicker.Value />
            </EmojiPicker.Trigger>
            <EmojiPicker.Popover>
              <EmojiPicker.Content>
                <EmojiPicker.Grid
                  items={emojiItems}
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
                  <EmojiPicker.SkinTonePicker defaultValue="default">
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
      ))}
    </div>
  );
}
