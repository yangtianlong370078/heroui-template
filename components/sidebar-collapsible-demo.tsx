"use client";

import {ChartBar, Folder, Gear, House} from "@gravity-ui/icons";
import {Sidebar} from "@heroui-pro/react";

const navItems = [
  {icon: <House />, label: "Home"},
  {icon: <ChartBar />, label: "Analytics"},
  {icon: <Folder />, label: "Projects"},
  {icon: <Gear />, label: "Settings"},
];

export default function SidebarCollapsibleDemo() {
  return (
    <div className="h-[500px] w-full overflow-hidden rounded-xl border">
      <Sidebar.Provider collapsible="icon">
        <Sidebar>
          <Sidebar.Header>
            <Sidebar.Trigger />
          </Sidebar.Header>
          <Sidebar.Content>
            <Sidebar.Menu>
              {navItems.map((item, i) => (
                <Sidebar.MenuItem key={item.label} isCurrent={i === 0} textValue={item.label}>
                  <Sidebar.MenuIcon>{item.icon}</Sidebar.MenuIcon>
                  <Sidebar.MenuLabel>{item.label}</Sidebar.MenuLabel>
                </Sidebar.MenuItem>
              ))}
            </Sidebar.Menu>
          </Sidebar.Content>
          <Sidebar.Rail />
        </Sidebar>
        <Sidebar.Main>
          <div className="p-6">
            <h2 className="text-xl font-bold">Collapsible</h2>
            <p className="mt-2 text-sm text-foreground/60">
              Enable <code>collapsible="icon"</code> to collapse the sidebar into an icon-only rail.
              Press <kbd className="rounded border px-1 text-xs">Cmd+B</kbd> to toggle.
            </p>
          </div>
        </Sidebar.Main>
      </Sidebar.Provider>
    </div>
  );
}
