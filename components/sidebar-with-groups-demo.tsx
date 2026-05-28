"use client";

import {Bell, ChartBar, Folder, Gear, House, LayoutList, Person} from "@gravity-ui/icons";
import {Sidebar} from "@heroui-pro/react";

const mainItems = [
  {icon: <House />, label: "Home"},
  {icon: <ChartBar />, label: "Analytics"},
  {icon: <Folder />, label: "Projects"},
];

const productivityItems = [
  {icon: <LayoutList />, label: "Tasks"},
  {icon: <Bell />, label: "Notifications"},
];

const settingsItems = [
  {icon: <Person />, label: "Account"},
  {icon: <Gear />, label: "Settings"},
];

export default function SidebarWithGroupsDemo() {
  return (
    <div className="h-[550px] w-full overflow-hidden rounded-xl border">
      <Sidebar.Provider toggleShortcut={false}>
        <Sidebar>
          <Sidebar.Header>
            <div className="px-2 text-sm font-bold">HeroUI Pro</div>
          </Sidebar.Header>
          <Sidebar.Content>
            <Sidebar.Group>
              <Sidebar.GroupLabel>Main</Sidebar.GroupLabel>
              <Sidebar.Menu>
                {mainItems.map((item, i) => (
                  <Sidebar.MenuItem key={item.label} isCurrent={i === 0} textValue={item.label}>
                    <Sidebar.MenuIcon>{item.icon}</Sidebar.MenuIcon>
                    <Sidebar.MenuLabel>{item.label}</Sidebar.MenuLabel>
                  </Sidebar.MenuItem>
                ))}
              </Sidebar.Menu>
            </Sidebar.Group>
            <Sidebar.Separator />
            <Sidebar.Group>
              <Sidebar.GroupLabel>Productivity</Sidebar.GroupLabel>
              <Sidebar.Menu>
                {productivityItems.map((item) => (
                  <Sidebar.MenuItem key={item.label} textValue={item.label}>
                    <Sidebar.MenuIcon>{item.icon}</Sidebar.MenuIcon>
                    <Sidebar.MenuLabel>{item.label}</Sidebar.MenuLabel>
                  </Sidebar.MenuItem>
                ))}
              </Sidebar.Menu>
            </Sidebar.Group>
            <Sidebar.Separator />
            <Sidebar.Group>
              <Sidebar.GroupLabel>Settings</Sidebar.GroupLabel>
              <Sidebar.Menu>
                {settingsItems.map((item) => (
                  <Sidebar.MenuItem key={item.label} textValue={item.label}>
                    <Sidebar.MenuIcon>{item.icon}</Sidebar.MenuIcon>
                    <Sidebar.MenuLabel>{item.label}</Sidebar.MenuLabel>
                  </Sidebar.MenuItem>
                ))}
              </Sidebar.Menu>
            </Sidebar.Group>
          </Sidebar.Content>
        </Sidebar>
        <Sidebar.Main>
          <div className="p-6">
            <h2 className="text-xl font-bold">With Groups</h2>
            <p className="mt-2 text-sm text-foreground/60">
              Organize menu items into labeled groups separated by dividers.
            </p>
          </div>
        </Sidebar.Main>
      </Sidebar.Provider>
    </div>
  );
}
