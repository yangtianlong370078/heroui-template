"use client";

import type {Key} from "@heroui/react";

import {ListBox} from "@heroui/react";
import {useState} from "react";

import {CellSelect} from "@heroui-pro/react";

const themes = [
  {id: "default", name: "Default"},
  {id: "dark", name: "Dark"},
  {id: "system", name: "System"},
];

export default function CellSelectControlledDemo() {
  const [theme, setTheme] = useState<Key | null>("default");

  const selectedTheme = themes.find((t) => t.id === theme);

  return (
    <div className="flex w-[252px] flex-col gap-2">
      <CellSelect aria-label="Theme" value={theme} onChange={(v) => setTheme(v as Key | null)}>
        <CellSelect.Trigger>
          <CellSelect.Label>Theme</CellSelect.Label>
          <CellSelect.Value />
          <CellSelect.Indicator />
        </CellSelect.Trigger>
        <CellSelect.Popover>
          <ListBox>
            {themes.map((t) => (
              <ListBox.Item key={t.id} id={t.id} textValue={t.name}>
                {t.name}
                <ListBox.ItemIndicator />
              </ListBox.Item>
            ))}
          </ListBox>
        </CellSelect.Popover>
      </CellSelect>
      <p className="text-muted px-1 text-sm">Selected: {selectedTheme?.name ?? "None"}</p>
    </div>
  );
}
