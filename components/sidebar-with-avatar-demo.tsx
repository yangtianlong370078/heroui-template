"use client";

import {ChartBar, Folder, Gear, House} from "@gravity-ui/icons";
import {Avatar} from "@heroui/react";
import {Sidebar} from "@heroui-pro/react";

const navItems = [
  {icon: <House />, label: "Home"},
  {icon: <ChartBar />, label: "Analytics"},
  {icon: <Folder />, label: "Projects"},
  {icon: <Gear />, label: "Settings"},
];

export default function SidebarWithAvatarDemo() {
  return (
    <div className="h-[500px] w-full overflow-hidden rounded-xl border">
      <Sidebar.Provider toggleShortcut={false}>
        <Sidebar>
          <Sidebar.Header>
            <div className="flex items-center gap-2 px-2">
              <Avatar size="sm">
                <Avatar.Fallback>HP</Avatar.Fallback>
              </Avatar>
              <span className="text-sm font-bold">HeroUI Pro</span>
            </div>
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
            <h2 className="text-xl font-bold">With Avatar</h2>
            <p className="mt-2 text-sm text-foreground/60">
              Display a user avatar in the sidebar header with a collapsible layout.
            </p>
          </div>
        </Sidebar.Main>
      </Sidebar.Provider>
    </div>
  );
}
