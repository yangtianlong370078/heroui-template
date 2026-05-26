"use client";

import {CellSlider} from "@heroui-pro/react";

export default function CellSliderDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2 rounded-2xl p-6">
      <CellSlider
        aria-label="Spacing"
        defaultValue={0.5}
        formatOptions={{maximumFractionDigits: 2, minimumFractionDigits: 2}}
        maxValue={1}
        minValue={0}
        step={0.01}
      >
        <CellSlider.Track>
          <CellSlider.Fill />
          <CellSlider.Thumb />
          <CellSlider.Label>Spacing</CellSlider.Label>
          <CellSlider.Output />
        </CellSlider.Track>
      </CellSlider>
      <CellSlider
        aria-label="Volume"
        defaultValue={75}
        maxValue={100}
        minValue={0}
        step={1}
      >
        <CellSlider.Track>
          <CellSlider.Fill />
          <CellSlider.Thumb />
          <CellSlider.Label>Volume</CellSlider.Label>
          <CellSlider.Output />
        </CellSlider.Track>
      </CellSlider>
    </div>
  );
}
