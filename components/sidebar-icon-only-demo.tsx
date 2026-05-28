"use client";

import {ChartBar, Folder, Gear, House} from "@gravity-ui/icons";
import {Sidebar} from "@heroui-pro/react";

const navItems = [
  {icon: <House />, label: "Home", tooltip: "Home"},
  {icon: <ChartBar />, label: "Analytics", tooltip: "Analytics"},
  {icon: <Folder />, label: "Projects", tooltip: "Projects"},
  {icon: <Gear />, label: "Settings", tooltip: "Settings"},
];

export default function SidebarIconOnlyDemo() {
  return (
    <div className="h-[500px] w-full overflow-hidden rounded-xl border">
      <Sidebar.Provider open={false} onOpenChange={() => {}} toggleShortcut={false}>
        <Sidebar>
          <Sidebar.Content>
            <Sidebar.Menu>
              {navItems.map((item, i) => (
                <Sidebar.MenuItem
                  key={item.label}
                  isCurrent={i === 0}
                  textValue={item.label}
                  tooltip={item.tooltip}
                >
                  <Sidebar.MenuIcon>{item.icon}</Sidebar.MenuIcon>
                  <Sidebar.MenuLabel>{item.label}</Sidebar.MenuLabel>
                </Sidebar.MenuItem>
              ))}
            </Sidebar.Menu>
          </Sidebar.Content>
        </Sidebar>
        <Sidebar.Main>
          <div className="p-6">
            <h2 className="text-xl font-bold">Icon Only</h2>
            <p className="mt-2 text-sm text-foreground/60">
              A permanently collapsed icon-only sidebar with tooltips on each item. Hover over the
              icons to see their labels.
            </p>
          </div>
        </Sidebar.Main>
      </Sidebar.Provider>
    </div>
  );
}
