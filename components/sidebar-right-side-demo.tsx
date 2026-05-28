"use client";

import {ChartBar, Folder, Gear, House} from "@gravity-ui/icons";
import {Sidebar} from "@heroui-pro/react";

const navItems = [
  {icon: <House />, label: "Home"},
  {icon: <ChartBar />, label: "Analytics"},
  {icon: <Folder />, label: "Projects"},
  {icon: <Gear />, label: "Settings"},
];

export default function SidebarRightSideDemo() {
  return (
    <div className="h-[500px] w-full overflow-hidden rounded-xl border">
      <Sidebar.Provider side="right" toggleShortcut={false}>
        <Sidebar>
          <Sidebar.Header>
            <div className="px-2 text-sm font-bold">HeroUI Pro</div>
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
        </Sidebar>
        <Sidebar.Main>
          <div className="p-6">
            <h2 className="text-xl font-bold">Right Side</h2>
            <p className="mt-2 text-sm text-foreground/60">
              Position the sidebar on the right by setting <code>side="right"</code> on{" "}
              <code>Sidebar.Provider</code>.
            </p>
          </div>
        </Sidebar.Main>
      </Sidebar.Provider>
    </div>
  );
}
