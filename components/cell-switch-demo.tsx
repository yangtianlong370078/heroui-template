"use client";

import {CellSwitch} from "@heroui-pro/react";

export default function CellSwitchDemo() {
  return (
    <div className="flex flex-col gap-2 rounded-2xl p-6">
      <CellSwitch defaultSelected aria-label="Animations">
        <CellSwitch.Trigger>
          <CellSwitch.Label>Animations</CellSwitch.Label>
          <CellSwitch.Control />
        </CellSwitch.Trigger>
      </CellSwitch>
      <CellSwitch aria-label="Notifications">
        <CellSwitch.Trigger>
          <CellSwitch.Label>Notifications</CellSwitch.Label>
          <CellSwitch.Control />
        </CellSwitch.Trigger>
      </CellSwitch>
      <CellSwitch isDisabled aria-label="Dark Mode">
        <CellSwitch.Trigger>
          <CellSwitch.Label>Dark Mode (disabled)</CellSwitch.Label>
          <CellSwitch.Control />
        </CellSwitch.Trigger>
      </CellSwitch>
    </div>
  );
}
