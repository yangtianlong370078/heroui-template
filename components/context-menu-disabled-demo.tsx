"use client";

import {Label} from "@heroui/react";

import {ContextMenu} from "@heroui-pro/react";

export default function ContextMenuDisabledDemo() {
  return (
    <ContextMenu isDisabled>
      <ContextMenu.Trigger>
        <div className="border-border text-muted flex h-48 w-80 select-none items-center justify-center rounded-xl border border-dashed text-sm">
          Right-click here (disabled)
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Popover>
        <ContextMenu.Menu>
          <ContextMenu.Item id="action-1" textValue="Action 1">
            <Label>Action 1</Label>
          </ContextMenu.Item>
        </ContextMenu.Menu>
      </ContextMenu.Popover>
    </ContextMenu>
  );
}
