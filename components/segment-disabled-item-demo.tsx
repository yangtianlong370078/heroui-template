"use client";

import {Segment} from "@heroui-pro/react";

export default function SegmentDisabledItemDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <Segment defaultSelectedKey="dashboard">
        <Segment.Item id="dashboard">
          <Segment.Separator />
          Dashboard
        </Segment.Item>
        <Segment.Item isDisabled id="analytics">
          <Segment.Separator />
          Analytics
        </Segment.Item>
        <Segment.Item id="reports">
          <Segment.Separator />
          Reports
        </Segment.Item>
      </Segment>
    </div>
  );
}
