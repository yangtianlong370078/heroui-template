"use client";

import type {Key} from "@heroui/react";

import {ListBox} from "@heroui/react";
import {useState} from "react";

import {CellSelect} from "@heroui-pro/react";

const variants = ["default", "secondary"] as const;

export default function CellSelectVariantsDemo() {
  const [themeDefault, setThemeDefault] = useState<Key | null>("default");
  const [themeSecondary, setThemeSecondary] = useState<Key | null>("default");

  const themeState: Record<string, [Key | null, (v: Key | null) => void]> = {
    default: [themeDefault, setThemeDefault],
    secondary: [themeSecondary, setThemeSecondary],
  };

  return (
    <div className="flex w-[252px] flex-col gap-3">
      {variants.map((variant) => {
        const [theme, setTheme] = themeState[variant];

        return (
          <div key={variant} className="flex flex-col gap-1">
            <span className="text-muted text-xs">{variant}</span>
            <CellSelect
              aria-label="Theme"
              value={theme}
              variant={variant}
              onChange={(v) => setTheme(v as Key | null)}
            >
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
        );
      })}
    </div>
  );
}
