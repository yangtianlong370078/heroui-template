"use client";

import {Button} from "@heroui/react";

import {Sheet} from "@heroui-pro/react";

export default function SheetHandleOnlyDemo() {
  return (
    <Sheet isHandleOnly>
      <Sheet.Trigger>
        <Button variant="secondary">Handle Only</Button>
      </Sheet.Trigger>
      <Sheet.Backdrop>
        <Sheet.Content className="mx-auto max-w-[420px]">
          <Sheet.Dialog>
            <Sheet.Handle />
            <Sheet.CloseTrigger />
            <Sheet.Header>
              <Sheet.Heading>Handle-Only Drag</Sheet.Heading>
            </Sheet.Header>
            <Sheet.Body>
              <p className="text-muted text-sm">
                This sheet can only be dragged via the handle at the top. Dragging the body content
                will not dismiss it — useful when the body has interactive elements.
              </p>
            </Sheet.Body>
            <Sheet.Footer>
              <Sheet.Close>
                <Button>Done</Button>
              </Sheet.Close>
            </Sheet.Footer>
          </Sheet.Dialog>
        </Sheet.Content>
      </Sheet.Backdrop>
    </Sheet>
  );
}
