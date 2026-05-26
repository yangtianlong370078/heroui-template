"use client";

import type {Key} from "@heroui/react";

import {ListBox} from "@heroui/react";
import {useState} from "react";
import {InlineSelect} from "@heroui-pro/react";

export default function InlineSelectDemo() {
  const [value, setValue] = useState<Key | null>("en");

  return (
    <div className="flex items-center gap-2 rounded-2xl p-6 text-sm">
      <span>Display language:</span>
      <InlineSelect aria-label="Language" value={value} onChange={(v) => setValue(v)}>
        <InlineSelect.Trigger>
          <InlineSelect.Value />
          <InlineSelect.Indicator />
        </InlineSelect.Trigger>
        <InlineSelect.Popover className="w-[140px]">
          <ListBox>
            <ListBox.Item id="en" textValue="English">
              English
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="es" textValue="Spanish">
              Spanish
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="fr" textValue="French">
              French
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="ja" textValue="Japanese">
              Japanese
              <ListBox.ItemIndicator />
            </ListBox.Item>
          </ListBox>
        </InlineSelect.Popover>
      </InlineSelect>
    </div>
  );
}
