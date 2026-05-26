"use client";

import {NativeSelect} from "@heroui-pro/react";

export default function NativeSelectDemo() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl p-6">
      <div className="w-full max-w-[220px]">
        <NativeSelect className="w-full">
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
    </div>
  );
}
