"use client";

import {Button} from "@heroui/react";

import {Sheet} from "@heroui-pro/react";

export default function SheetNonDismissableDemo() {
  return (
    <Sheet isDismissable={false}>
      <Sheet.Trigger>
        <Button variant="secondary">Important Action</Button>
      </Sheet.Trigger>
      <Sheet.Backdrop>
        <Sheet.Content className="mx-auto max-w-[420px]">
          <Sheet.Dialog>
            <Sheet.Header>
              <Sheet.Heading>Confirm Action</Sheet.Heading>
            </Sheet.Header>
            <Sheet.Body>
              <p className="text-muted text-sm">
                This sheet cannot be dismissed by clicking outside or dragging. You must use one of
                the buttons below.
              </p>
            </Sheet.Body>
            <Sheet.Footer>
              <Sheet.Close>
                <Button variant="secondary">Cancel</Button>
              </Sheet.Close>
              <Sheet.Close>
                <Button>Confirm</Button>
              </Sheet.Close>
            </Sheet.Footer>
          </Sheet.Dialog>
        </Sheet.Content>
      </Sheet.Backdrop>
    </Sheet>
  );
}
