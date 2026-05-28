"use client";

import {Button} from "@heroui/react";
import React from "react";

import {Sheet} from "@heroui-pro/react";

const fadeSnapPoints = ["150px", "300px", "450px", 1] as const;

export default function SheetSnapPointsCustomFadeDemo() {
  const [snap, setSnap] = React.useState<string | number | null>(fadeSnapPoints[0]);

  return (
    <Sheet
      activeSnapPoint={snap}
      fadeFromIndex={1}
      snapPoints={fadeSnapPoints as unknown as (number | string)[]}
      onActiveSnapPointChange={setSnap}
    >
      <Sheet.Trigger>
        <Button variant="secondary">Custom Fade Index</Button>
      </Sheet.Trigger>
      <Sheet.Backdrop>
        <Sheet.Content>
          <Sheet.Dialog>
            <Sheet.Handle />
            <Sheet.Header>
              <Sheet.Heading>Custom Fade</Sheet.Heading>
              <p className="text-muted text-sm">
                Current: {typeof snap === "number" ? "100%" : snap}
              </p>
            </Sheet.Header>
            <Sheet.Body>
              <p className="text-muted text-sm">
                The <code className="text-foreground">fadeFromIndex</code> prop controls when the
                overlay starts fading in. Here it&apos;s set to index 1 (300px), so the overlay
                begins appearing at the second snap point instead of the last.
              </p>
            </Sheet.Body>
          </Sheet.Dialog>
        </Sheet.Content>
      </Sheet.Backdrop>
    </Sheet>
  );
}
