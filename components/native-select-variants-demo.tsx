"use client";

import {NativeSelect} from "@heroui-pro/react";

export default function NativeSelectVariantsDemo() {
  return (
    <div className="flex flex-wrap items-start gap-6">
      {(["primary", "secondary"] as const).map((variant) => (
        <div key={variant} className="flex w-[220px] flex-col gap-2">
          <span className="text-muted text-xs">{variant}</span>
          <NativeSelect className="w-full" variant={variant}>
            <NativeSelect.Trigger>
              <NativeSelect.Option value="">Select status</NativeSelect.Option>
              <NativeSelect.Option value="todo">Todo</NativeSelect.Option>
              <NativeSelect.Option value="in-progress">In Progress</NativeSelect.Option>
              <NativeSelect.Option value="done">Done</NativeSelect.Option>
              <NativeSelect.Option value="cancelled">Cancelled</NativeSelect.Option>
              <NativeSelect.Indicator />
            </NativeSelect.Trigger>
          </NativeSelect>
        </div>
      ))}
    </div>
  );
}
