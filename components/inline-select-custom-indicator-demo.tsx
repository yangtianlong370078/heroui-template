"use client";

import type {Key} from "@heroui/react";

import {ChevronRight} from "@gravity-ui/icons";
import {ListBox} from "@heroui/react";
import {useState} from "react";

import {InlineSelect} from "@heroui-pro/react";

export default function InlineSelectCustomIndicatorDemo() {
  const [role, setRole] = useState<Key | null>("editor");

  return (
    <InlineSelect aria-label="Role" value={role} onChange={(v) => setRole(v)}>
      <InlineSelect.Trigger>
        <InlineSelect.Value />
        <InlineSelect.Indicator>
          <ChevronRight />
        </InlineSelect.Indicator>
      </InlineSelect.Trigger>
      <InlineSelect.Popover className="w-[124px]">
        <ListBox>
          <ListBox.Item id="viewer" textValue="Viewer">
            Viewer
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="editor" textValue="Editor">
            Editor
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="admin" textValue="Admin">
            Admin
            <ListBox.ItemIndicator />
          </ListBox.Item>
        </ListBox>
      </InlineSelect.Popover>
    </InlineSelect>
  );
}
