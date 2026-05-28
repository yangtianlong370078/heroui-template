"use client";

import {ChartBar, EllipsisVertical, Folder, Gear, House} from "@gravity-ui/icons";
import {Avatar, Button, Dropdown, Label, Separator} from "@heroui/react";
import {Sidebar} from "@heroui-pro/react";
import React from "react";

const navItems = [
  {icon: <House />, label: "Home"},
  {icon: <ChartBar />, label: "Analytics"},
  {icon: <Folder />, label: "Projects"},
  {icon: <Gear />, label: "Settings"},
];

export default function SidebarCompactWithUserMenuDemo() {
  return (
    <div
      className="h-[500px] w-full overflow-hidden rounded-xl border"
      style={{"--spacing": "0.22rem"} as React.CSSProperties}
    >
      <Sidebar.Provider toggleShortcut={false}>
        <Sidebar>
          <Sidebar.Header>
            <div className="px-2 text-sm font-bold">HeroUI</div>
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
          <Sidebar.Footer>
            <Dropdown>
              <Button
                className="h-auto w-full justify-start gap-2 px-2 py-1.5"
                variant="ghost"
              >
                <Avatar size="sm">
                  <Avatar.Fallback>JD</Avatar.Fallback>
                </Avatar>
                <div className="min-w-0 flex-1 overflow-hidden text-left">
                  <p className="truncate text-sm font-medium">John Doe</p>
                  <p className="truncate text-xs text-foreground/50">john@example.com</p>
                </div>
                <EllipsisVertical className="text-muted size-4 shrink-0" />
              </Button>
              <Dropdown.Popover className="min-w-[200px]">
                <Dropdown.Menu>
                  <Dropdown.Item id="profile" textValue="Profile">
                    <Label>Profile</Label>
                  </Dropdown.Item>
                  <Dropdown.Item id="settings" textValue="Settings">
                    <Label>Settings</Label>
                  </Dropdown.Item>
                  <Separator />
                  <Dropdown.Item id="logout" textValue="Log out">
                    <Label>Log out</Label>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          </Sidebar.Footer>
        </Sidebar>
        <Sidebar.Main>
          <div className="p-6">
            <h2 className="text-xl font-bold">Compact With User Menu</h2>
            <p className="mt-2 text-sm text-foreground/60">
              Compact sidebar with a user dropdown menu at the footer.
            </p>
          </div>
        </Sidebar.Main>
      </Sidebar.Provider>
    </div>
  );
}
