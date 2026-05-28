"use client";

import {CellSwitch} from "@heroui-pro/react";

const variants = ["default", "secondary"] as const;

export default function CellSwitchVariantsDemo() {
  return (
    <div className="flex w-[252px] flex-col gap-3">
      {variants.map((variant) => (
        <div key={variant} className="flex flex-col gap-1">
          <span className="text-muted text-xs">{variant}</span>
          <CellSwitch defaultSelected aria-label="Animations" variant={variant}>
            <CellSwitch.Trigger>
              <CellSwitch.Label>Animations</CellSwitch.Label>
              <CellSwitch.Control />
            </CellSwitch.Trigger>
          </CellSwitch>
        </div>
      ))}
    </div>
  );
}
