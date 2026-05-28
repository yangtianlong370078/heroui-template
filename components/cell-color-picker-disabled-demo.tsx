"use client";

import {ColorArea} from "@heroui/react";

import {CellColorPicker} from "@heroui-pro/react";

export default function CellColorPickerDisabledDemo() {
  return (
    <div className="w-[252px]">
      <CellColorPicker aria-label="Accent" defaultValue="#3B82F6">
        <CellColorPicker.Trigger isDisabled>
          <CellColorPicker.Label>Accent</CellColorPicker.Label>
          <CellColorPicker.ValueDisplay />
          <CellColorPicker.Swatch />
        </CellColorPicker.Trigger>
        <CellColorPicker.Popover>
          <ColorArea
            aria-label="Color area"
            className="max-w-full"
            colorSpace="hsb"
            xChannel="saturation"
            yChannel="brightness"
          >
            <ColorArea.Thumb />
          </ColorArea>
        </CellColorPicker.Popover>
      </CellColorPicker>
    </div>
  );
}
