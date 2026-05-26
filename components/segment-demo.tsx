"use client";

import {useState} from "react";
import {Segment} from "@heroui-pro/react";

const tabs = [
  {id: "dashboard", label: "Dashboard"},
  {id: "analytics", label: "Analytics"},
  {id: "reports", label: "Reports"},
  {id: "settings", label: "Settings"},
];

export default function SegmentDemo() {
  const [selected, setSelected] = useState("dashboard");

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <Segment aria-label="View sections" selectedKey={selected} onSelectionChange={(k) => setSelected(String(k))}>
        {tabs.map((tab) => (
          <Segment.Item key={tab.id} id={tab.id}>
            <Segment.Separator />
            {tab.label}
          </Segment.Item>
        ))}
      </Segment>
      <p className="text-muted text-sm">Active: {selected}</p>
    </div>
  );
}
