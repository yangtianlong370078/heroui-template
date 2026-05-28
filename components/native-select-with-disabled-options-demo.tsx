"use client";

import {Label} from "@heroui/react";

import {NativeSelect} from "@heroui-pro/react";

export default function NativeSelectWithDisabledOptionsDemo() {
  return (
    <div className="w-[220px]">
      <NativeSelect fullWidth>
        <Label>Animal</Label>
        <NativeSelect.Trigger name="animal">
          <NativeSelect.Option value="">Select an animal</NativeSelect.Option>
          <NativeSelect.Option value="dog">Dog</NativeSelect.Option>
          <NativeSelect.Option disabled value="cat">
            Cat (unavailable)
          </NativeSelect.Option>
          <NativeSelect.Option value="bird">Bird</NativeSelect.Option>
          <NativeSelect.Option disabled value="kangaroo">
            Kangaroo (unavailable)
          </NativeSelect.Option>
          <NativeSelect.Option value="elephant">Elephant</NativeSelect.Option>
          <NativeSelect.Indicator />
        </NativeSelect.Trigger>
      </NativeSelect>
    </div>
  );
}
