"use client";

import {EmojiPicker, EMOJI_SKIN_TONES} from "@heroui-pro/react";
import {useState} from "react";

import {emojiItems} from "./emoji-picker-data";

export default function EmojiPickerInlineDemo() {
  const [text, setText] = useState("");
  const [skinTone, setSkinTone] = useState("default");
  // Keep selectedKey as null so the picker always resets after selection
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const handleEmojiSelect = (key: string | number | null) => {
    if (key) {
      setText((prev) => prev + String(key));
    }
    // Reset selection so the picker can be re-opened in the same state
    setSelectedKey(null);
  };

  return (
    <div className="flex w-[380px] flex-col gap-2 p-6">
      <p className="text-xs font-medium text-default-500">Inline in message composer</p>
      <div className="rounded-xl border border-divider bg-content1 p-3">
        <textarea
          className="w-full resize-none bg-transparent text-sm text-foreground outline-none"
          placeholder="Type a message..."
          rows={3}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex items-center border-t border-divider pt-2">
          <EmojiPicker selectedKey={selectedKey} onSelectionChange={handleEmojiSelect}>
            <EmojiPicker.Trigger>
              <span aria-label="Add emoji" className="text-xl">
                🙂
              </span>
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
      </div>
    </div>
  );
}
