"use client";

import {ColorArea, ColorSlider, Label} from "@heroui/react";
import {CellColorPicker} from "@heroui-pro/react";

export default function CellColorPickerDemo() {
  return (
    <div className="rounded-2xl p-6">
      <div className="w-[252px]">
        <CellColorPicker aria-label="Accent" defaultValue="#3B82F6">
          <CellColorPicker.Trigger>
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
            <ColorSlider aria-label="Hue" channel="hue" className="gap-1 px-1" colorSpace="hsb">
              <Label>Hue</Label>
              <ColorSlider.Output className="text-muted" />
              <ColorSlider.Track>
                <ColorSlider.Thumb />
              </ColorSlider.Track>
            </ColorSlider>
          </CellColorPicker.Popover>
        </CellColorPicker>
      </div>
    </div>
  );
}
