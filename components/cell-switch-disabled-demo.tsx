"use client";

import {CellSwitch} from "@heroui-pro/react";

export default function CellSwitchDisabledDemo() {
  return (
    <div className="flex w-[252px] flex-col gap-2">
      <CellSwitch defaultSelected isDisabled aria-label="Animations">
        <CellSwitch.Trigger>
          <CellSwitch.Label>Animations</CellSwitch.Label>
          <CellSwitch.Control />
        </CellSwitch.Trigger>
      </CellSwitch>
      <CellSwitch isDisabled aria-label="Animations" defaultSelected={false}>
        <CellSwitch.Trigger>
          <CellSwitch.Label>Animations</CellSwitch.Label>
          <CellSwitch.Control />
        </CellSwitch.Trigger>
      </CellSwitch>
    </div>
  );
}
