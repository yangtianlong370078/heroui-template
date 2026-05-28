"use client";

import type {Selection} from "@heroui/react";

import {Header, Label} from "@heroui/react";
import {useState} from "react";

import {ContextMenu} from "@heroui-pro/react";

export default function ContextMenuWithSelectionDemo() {
  const [selected, setSelected] = useState<Selection>(new Set(["grid"]));

  return (
    <ContextMenu>
      <ContextMenu.Trigger>
        <div className="border-border text-muted flex h-48 w-80 select-none items-center justify-center rounded-xl border border-dashed text-sm">
          Right-click to change view
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Popover>
        <ContextMenu.Menu
          selectedKeys={selected}
          selectionMode="single"
          onSelectionChange={setSelected}
        >
          <ContextMenu.Section>
            <Header>View</Header>
            <ContextMenu.Item id="grid" textValue="Grid">
              <ContextMenu.ItemIndicator />
              <Label>Grid</Label>
            </ContextMenu.Item>
            <ContextMenu.Item id="list" textValue="List">
              <ContextMenu.ItemIndicator />
              <Label>List</Label>
            </ContextMenu.Item>
            <ContextMenu.Item id="columns" textValue="Columns">
              <ContextMenu.ItemIndicator />
              <Label>Columns</Label>
            </ContextMenu.Item>
          </ContextMenu.Section>
        </ContextMenu.Menu>
      </ContextMenu.Popover>
    </ContextMenu>
  );
}
