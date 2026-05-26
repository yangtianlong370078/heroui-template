"use client";

import {useState} from "react";
import {EmojiReactionButton} from "@heroui-pro/react";

export default function EmojiReactionButtonDemo() {
  const [reactions, setReactions] = useState<Record<string, {count: number; selected: boolean}>>({
    "❤️": {count: 12, selected: true},
    "🎉": {count: 1, selected: false},
    "👍": {count: 5, selected: false},
    "😂": {count: 3, selected: false},
    "🚀": {count: 1, selected: false},
  });

  const toggle = (emoji: string) => {
    setReactions((prev) => {
      const reaction = prev[emoji];
      if (!reaction) return prev;
      const selected = !reaction.selected;
      const count = selected ? reaction.count + 1 : reaction.count - 1;
      if (count < 1) {
        const {[emoji]: _, ...rest} = prev;
        return rest;
      }
      return {...prev, [emoji]: {count, selected}};
    });
  };

  return (
    <div className="flex flex-wrap items-center gap-2 rounded-2xl p-6">
      {Object.entries(reactions).map(([emoji, {count, selected}]) => (
        <EmojiReactionButton key={emoji} isSelected={selected} onChange={() => toggle(emoji)}>
          <EmojiReactionButton.Emoji>{emoji}</EmojiReactionButton.Emoji>
          {count > 0 && <EmojiReactionButton.Count>{count}</EmojiReactionButton.Count>}
        </EmojiReactionButton>
      ))}
    </div>
  );
}
