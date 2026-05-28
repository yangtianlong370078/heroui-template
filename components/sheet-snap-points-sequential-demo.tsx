"use client";

import {Button} from "@heroui/react";
import React from "react";

import {Sheet} from "@heroui-pro/react";

const snapPointValues = ["148px", "355px", 1] as const;

export default function SheetSnapPointsSequentialDemo() {
  const [snap, setSnap] = React.useState<string | number | null>(snapPointValues[0]);

  return (
    <Sheet
      snapToSequentialPoint
      activeSnapPoint={snap}
      snapPoints={snapPointValues as unknown as (number | string)[]}
      onActiveSnapPointChange={setSnap}
    >
      <Sheet.Trigger>
        <Button variant="secondary">Sequential Snap Points</Button>
      </Sheet.Trigger>
      <Sheet.Backdrop>
        <Sheet.Content>
          <Sheet.Dialog>
            <Sheet.Handle />
            <Sheet.Header>
              <Sheet.Heading>Sequential</Sheet.Heading>
              <p className="text-muted text-sm">
                Current: {typeof snap === "number" ? "100%" : snap}
              </p>
            </Sheet.Header>
            <Sheet.Body>
              <p className="text-muted text-sm">
                Velocity-based snapping is disabled with{" "}
                <code className="text-foreground">snapToSequentialPoint</code>. A snap point
                won&apos;t be skipped even if you flick quickly. Useful when each level is equally
                important.
              </p>
            </Sheet.Body>
          </Sheet.Dialog>
        </Sheet.Content>
      </Sheet.Backdrop>
    </Sheet>
  );
}
