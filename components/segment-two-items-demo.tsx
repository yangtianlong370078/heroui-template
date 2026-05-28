"use client";

import {Segment} from "@heroui-pro/react";

export default function SegmentTwoItemsDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <Segment defaultSelectedKey="monthly" size="sm">
        <Segment.Item id="monthly">
          <Segment.Separator />
          Monthly
        </Segment.Item>
        <Segment.Item id="yearly">
          <Segment.Separator />
          Yearly
        </Segment.Item>
      </Segment>
    </div>
  );
}
