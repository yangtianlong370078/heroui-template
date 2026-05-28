"use client";

import {Resizable} from "@heroui-pro/react";

export default function ResizableWithIndicatorDemo() {
  return (
    <div className="bg-background border-border h-[400px] w-full overflow-hidden rounded-xl border">
      <Resizable orientation="horizontal">
        <Resizable.Panel defaultSize={40} minSize={15}>
          <div className="bg-surface flex h-full items-center justify-center p-4">
            <span className="text-surface-foreground text-sm font-medium">Left</span>
          </div>
        </Resizable.Panel>
        <Resizable.Handle withIndicator type="line" />
        <Resizable.Panel defaultSize={60}>
          <div className="flex h-full items-center justify-center p-4">
            <span className="text-foreground text-sm font-medium">Right</span>
          </div>
        </Resizable.Panel>
      </Resizable>
    </div>
  );
}
