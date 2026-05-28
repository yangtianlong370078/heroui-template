"use client";

import {ColorArea, ColorSlider, Label, parseColor} from "@heroui/react";
import {useState} from "react";

import {CellColorPicker} from "@heroui-pro/react";

export default function CellColorPickerControlledDemo() {
  const [color, setColor] = useState(parseColor("#3B82F6"));

  return (
    <div className="flex w-[252px] flex-col gap-2">
      <CellColorPicker aria-label="Accent" value={color} onChange={setColor}>
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
      <p className="text-muted px-1 text-sm">Selected: {color.toString("hex").toUpperCase()}</p>
    </div>
  );
}
