"use client";

import ChartColumn from "@gravity-ui/icons/ChartColumn";
import Gear from "@gravity-ui/icons/Gear";
import LayoutList from "@gravity-ui/icons/LayoutList";
import PersonFill from "@gravity-ui/icons/PersonFill";

import {Segment} from "@heroui-pro/react";

const iconTabs = [
  {icon: <LayoutList />, id: "dashboard", label: "Dashboard"},
  {icon: <ChartColumn />, id: "analytics", label: "Analytics"},
  {icon: <PersonFill />, id: "team", label: "Team"},
  {icon: <Gear />, id: "settings", label: "Settings"},
];

export default function SegmentWithIconsDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <Segment defaultSelectedKey="dashboard">
        {iconTabs.map((tab) => (
          <Segment.Item key={tab.id} id={tab.id}>
            <Segment.Separator />
            {tab.icon}
            {tab.label}
          </Segment.Item>
        ))}
      </Segment>
    </div>
  );
}
