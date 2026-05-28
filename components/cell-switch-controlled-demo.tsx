"use client";

import {useState} from "react";

import {CellSwitch} from "@heroui-pro/react";

export default function CellSwitchControlledDemo() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="flex w-[252px] flex-col gap-2">
      <CellSwitch aria-label="Animations" isSelected={enabled} onChange={setEnabled}>
        <CellSwitch.Trigger>
          <CellSwitch.Label>Animations</CellSwitch.Label>
          <CellSwitch.Control />
        </CellSwitch.Trigger>
      </CellSwitch>
      <p className="text-muted px-1 text-sm">Animations: {enabled ? "On" : "Off"}</p>
    </div>
  );
}
