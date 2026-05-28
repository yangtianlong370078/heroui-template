"use client";

import {Button} from "@heroui/react";
import React from "react";

import {Sheet} from "@heroui-pro/react";

const snapPointValues = ["148px", "355px", 1] as const;

export default function SheetSnapPointsDemo() {
  const [snap, setSnap] = React.useState<string | number | null>(snapPointValues[0]);

  return (
    <Sheet
      activeSnapPoint={snap}
      snapPoints={snapPointValues as unknown as (number | string)[]}
      onActiveSnapPointChange={setSnap}
    >
      <Sheet.Trigger>
        <Button variant="secondary">Snap Points</Button>
      </Sheet.Trigger>
      <Sheet.Backdrop>
        <Sheet.Content>
          <Sheet.Dialog>
            <Sheet.Handle />
            <Sheet.Header>
              <Sheet.Heading>Snap Points</Sheet.Heading>
              <p className="text-muted text-sm">
                Current: {typeof snap === "number" ? "100%" : snap}
              </p>
            </Sheet.Header>
            <Sheet.Body>
              <div className="flex flex-col gap-4">
                <p className="text-muted text-sm">
                  Snap points let users drag a sheet to predefined positions. This sheet snaps to
                  148px, 355px, and full height. The overlay fades in as you reach the highest
                  point.
                </p>
                {Array.from({length: 6}).map((_, i) => (
                  <p key={i} className="text-muted text-sm">
                    {i === 0
                      ? "Drag the handle up to reveal more content and see the overlay fade in."
                      : `More content at this level (${i + 1}).`}
                  </p>
                ))}
              </div>
            </Sheet.Body>
          </Sheet.Dialog>
        </Sheet.Content>
      </Sheet.Backdrop>
    </Sheet>
  );
}
