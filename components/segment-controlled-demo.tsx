"use client";

import type {Key} from "react-aria-components";

import {useState} from "react";

import {Segment} from "@heroui-pro/react";

const tabs = [
  {id: "dashboard", label: "Dashboard"},
  {id: "analytics", label: "Analytics"},
  {id: "reports", label: "Reports"},
  {id: "settings", label: "Settings"},
];

export default function SegmentControlledDemo() {
  const [selected, setSelected] = useState<Key>("analytics");

  return (
    <div className="flex flex-col items-start gap-4">
      <Segment selectedKey={selected} onSelectionChange={setSelected}>
        {tabs.map((tab) => (
          <Segment.Item key={tab.id} id={tab.id}>
            <Segment.Separator />
            {tab.label}
          </Segment.Item>
        ))}
      </Segment>
      <span className="text-muted text-sm">
        Selected: <strong className="text-foreground">{String(selected)}</strong>
      </span>
    </div>
  );
}
