"use client";

import {Segment} from "@heroui-pro/react";

const tabs = [
  {id: "dashboard", label: "Dashboard"},
  {id: "analytics", label: "Analytics"},
  {id: "reports", label: "Reports"},
  {id: "settings", label: "Settings"},
];

export default function SegmentWithoutSeparatorsDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <Segment defaultSelectedKey="dashboard">
        {tabs.map((tab) => (
          <Segment.Item key={tab.id} id={tab.id}>
            {tab.label}
          </Segment.Item>
        ))}
      </Segment>
    </div>
  );
}
