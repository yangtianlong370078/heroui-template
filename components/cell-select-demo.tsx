"use client";

import type {Key} from "@heroui/react";

import {ListBox} from "@heroui/react";
import {useState} from "react";
import {CellSelect} from "@heroui-pro/react";

export default function CellSelectDemo() {
  const [theme, setTheme] = useState<Key | null>("default");

  return (
    <div className="rounded-2xl p-6">
      <div className="w-[252px]">
        <CellSelect aria-label="Theme" value={theme} onChange={(v) => setTheme(v as Key | null)}>
          <CellSelect.Trigger>
            <CellSelect.Label>Theme</CellSelect.Label>
            <CellSelect.Value />
            <CellSelect.Indicator />
          </CellSelect.Trigger>
          <CellSelect.Popover>
            <ListBox>
              <ListBox.Item id="default" textValue="Default">
                Default
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="dark" textValue="Dark">
                Dark
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="system" textValue="System">
                System
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </CellSelect.Popover>
        </CellSelect>
      </div>
    </div>
  );
}
