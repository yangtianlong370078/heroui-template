"use client";

import {EmojiPicker, EMOJI_SKIN_TONES} from "@heroui-pro/react";
import {useState} from "react";

import {emojiItems} from "./emoji-picker-data";

export default function EmojiPickerDemo() {
  const [skinTone, setSkinTone] = useState("default");

  return (
    <div className="flex items-center justify-center p-6">
      <EmojiPicker defaultSelectedKey="😀">
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
