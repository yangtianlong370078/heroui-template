"use client";

import {Segment} from "@heroui-pro/react";

const tabs = [
  {id: "dashboard", label: "Dashboard"},
  {id: "analytics", label: "Analytics"},
  {id: "reports", label: "Reports"},
  {id: "settings", label: "Settings"},
];

export default function SegmentSizesDemo() {
  return (
    <div className="flex flex-col items-start gap-6">
      {(["sm", "md", "lg"] as const).map((size) => (
        <div key={size} className="flex flex-col gap-2">
          <span className="text-muted text-xs">{size}</span>
          <Segment defaultSelectedKey="dashboard" size={size}>
            {tabs.map((tab) => (
              <Segment.Item key={tab.id} id={tab.id}>
                <Segment.Separator />
                {tab.label}
              </Segment.Item>
            ))}
          </Segment>
        </div>
      ))}
    </div>
  );
}
