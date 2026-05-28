"use client";

import {useState} from "react";

import {CellSlider} from "@heroui-pro/react";

export default function CellSliderIntegerStepDemo() {
  const [volume, setVolume] = useState(75);

  return (
    <div className="w-[252px]">
      <CellSlider
        aria-label="Volume"
        maxValue={100}
        minValue={0}
        step={1}
        value={volume}
        onChange={(v) => setVolume(v as number)}
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
