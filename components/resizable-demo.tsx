"use client";

import {Resizable} from "@heroui-pro/react";

export default function ResizableDemo() {
  return (
    <div className="bg-background border-border h-[400px] w-full overflow-hidden rounded-xl border">
      <Resizable orientation="horizontal">
        <Resizable.Panel defaultSize={30} minSize={15}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="text-sm font-medium">Sidebar</span>
          </div>
        </Resizable.Panel>
        <Resizable.Handle />
        <Resizable.Panel defaultSize={70}>
          <Resizable orientation="vertical">
            <Resizable.Panel defaultSize={60}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="text-foreground text-sm font-medium">Main content</span>
              </div>
            </Resizable.Panel>
            <Resizable.Handle />
            <Resizable.Panel defaultSize={40}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="text-muted text-sm">Bottom panel</span>
              </div>
            </Resizable.Panel>
          </Resizable>
        </Resizable.Panel>
      </Resizable>
    </div>
  );
}
