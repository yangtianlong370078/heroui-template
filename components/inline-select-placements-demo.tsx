"use client";

import type {InlineSelectPopoverProps} from "@heroui-pro/react";

import {ListBox} from "@heroui/react";
import {useState} from "react";

import {InlineSelect} from "@heroui-pro/react";

export default function InlineSelectPlacementsDemo() {
  const [placement, setPlacement] = useState<InlineSelectPopoverProps["placement"]>("bottom end");

  return (
    <div className="flex items-center justify-center px-10">
      <InlineSelect
        aria-label="Placement"
        value={placement}
        onChange={(v) => setPlacement(v as InlineSelectPopoverProps["placement"])}
      >
        <InlineSelect.Trigger>
          <InlineSelect.Value />
          <InlineSelect.Indicator />
        </InlineSelect.Trigger>
        <InlineSelect.Popover placement={placement}>
          <ListBox>
            <ListBox.Item id="bottom" textValue="bottom">
              bottom
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="bottom start" textValue="bottom start">
              bottom start
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="bottom end" textValue="bottom end (default)">
              bottom end (default)
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="top" textValue="top">
              top
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="top start" textValue="top start">
              top start
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="top end" textValue="top end">
              top end
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="left" textValue="left">
              left
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="left top" textValue="left top">
              left top
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="left bottom" textValue="left bottom">
              left bottom
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="right" textValue="right">
              right
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="right top" textValue="right top">
              right top
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="right bottom" textValue="right bottom">
              right bottom
              <ListBox.ItemIndicator />
            </ListBox.Item>
          </ListBox>
        </InlineSelect.Popover>
      </InlineSelect>
    </div>
  );
}
