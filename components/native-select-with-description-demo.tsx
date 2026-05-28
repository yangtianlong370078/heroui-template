"use client";

import {Description, Label} from "@heroui/react";

import {NativeSelect} from "@heroui-pro/react";

export default function NativeSelectWithDescriptionDemo() {
  return (
    <div className="w-[220px]">
      <NativeSelect fullWidth>
        <Label>Status</Label>
        <NativeSelect.Trigger name="status">
          <NativeSelect.Option value="">Select status</NativeSelect.Option>
          <NativeSelect.Option value="todo">Todo</NativeSelect.Option>
          <NativeSelect.Option value="in-progress">In Progress</NativeSelect.Option>
          <NativeSelect.Option value="done">Done</NativeSelect.Option>
          <NativeSelect.Option value="cancelled">Cancelled</NativeSelect.Option>
          <NativeSelect.Indicator />
        </NativeSelect.Trigger>
        <Description>Choose the current task status</Description>
      </NativeSelect>
    </div>
  );
}
