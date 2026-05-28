"use client";

import {Bell, ChartBar, FaceRobot, Folder, Gear, House, Star} from "@gravity-ui/icons";
import {Avatar, Separator} from "@heroui/react";
import {Sidebar} from "@heroui-pro/react";
import React from "react";

const workspaceItems = [
  {icon: <House />, label: "Dashboard"},
  {icon: <ChartBar />, label: "Analytics", chip: "3"},
  {icon: <Folder />, label: "Projects"},
];

const agentItems = [
  {label: "Code Reviewer"},
  {label: "Bug Finder"},
  {label: "Doc Writer"},
];

const favoriteItems = [
  {label: "heroui/heroui"},
  {label: "heroui/pro"},
];

const recentItems = [
  {label: "Fix auth bug"},
  {label: "Update docs"},
  {label: "Add dark mode"},
];

export default function SidebarComplexDemo() {
  return (
    <div
      className="h-[600px] w-full overflow-hidden rounded-xl border"
      style={{"--spacing": "0.22rem"} as React.CSSProperties}
    >
      <Sidebar.Provider toggleShortcut={false}>
        <Sidebar>
          <Sidebar.Header>
            <div className="px-2 text-sm font-bold">Acme Corp</div>
          </Sidebar.Header>
          <Sidebar.Content>
            <Sidebar.Group>
              <Sidebar.GroupLabel>Workspace</Sidebar.GroupLabel>
              <Sidebar.Menu>
                {workspaceItems.map((item) => (
                  <Sidebar.MenuItem key={item.label} textValue={item.label}>
                    <Sidebar.MenuIcon>{item.icon}</Sidebar.MenuIcon>
                    <Sidebar.MenuLabel>{item.label}</Sidebar.MenuLabel>
                    {item.chip && <Sidebar.MenuChip>{item.chip}</Sidebar.MenuChip>}
                  </Sidebar.MenuItem>
                ))}
              </Sidebar.Menu>
            </Sidebar.Group>
            <Sidebar.Separator />
            <Sidebar.Group>
              <Sidebar.GroupLabel>Agents</Sidebar.GroupLabel>
              <Sidebar.Menu>
                {agentItems.map((item) => (
                  <Sidebar.MenuItem key={item.label} textValue={item.label}>
                    <Sidebar.MenuIcon>
                      <FaceRobot />
                    </Sidebar.MenuIcon>
                    <Sidebar.MenuLabel>{item.label}</Sidebar.MenuLabel>
                  </Sidebar.MenuItem>
                ))}
              </Sidebar.Menu>
            </Sidebar.Group>
            <Sidebar.Separator />
            <Sidebar.Group>
              <Sidebar.GroupLabel>Favorites</Sidebar.GroupLabel>
              <Sidebar.Menu>
                {favoriteItems.map((item) => (
                  <Sidebar.MenuItem key={item.label} textValue={item.label}>
                    <Sidebar.MenuIcon>
                      <Star />
                    </Sidebar.MenuIcon>
                    <Sidebar.MenuLabel>{item.label}</Sidebar.MenuLabel>
                  </Sidebar.MenuItem>
                ))}
              </Sidebar.Menu>
            </Sidebar.Group>
            <Sidebar.Group>
              <Sidebar.GroupLabel>Recents</Sidebar.GroupLabel>
              <Sidebar.Menu>
                {recentItems.map((item) => (
                  <Sidebar.MenuItem key={item.label} textValue={item.label}>
                    <Sidebar.MenuLabel>{item.label}</Sidebar.MenuLabel>
                  </Sidebar.MenuItem>
                ))}
              </Sidebar.Menu>
            </Sidebar.Group>
          </Sidebar.Content>
          <Sidebar.Footer>
            <Sidebar.Menu>
              <Sidebar.MenuItem textValue="Notifications">
                <Sidebar.MenuIcon>
                  <Bell />
                </Sidebar.MenuIcon>
                <Sidebar.MenuLabel>Notifications</Sidebar.MenuLabel>
              </Sidebar.MenuItem>
              <Sidebar.MenuItem textValue="Settings">
                <Sidebar.MenuIcon>
                  <Gear />
                </Sidebar.MenuIcon>
                <Sidebar.MenuLabel>Settings</Sidebar.MenuLabel>
              </Sidebar.MenuItem>
            </Sidebar.Menu>
            <Separator className="my-1" />
            <div className="flex items-center gap-2 px-2 py-1">
              <Avatar size="sm">
                <Avatar.Fallback>JD</Avatar.Fallback>
              </Avatar>
              <div className="min-w-0 flex-1 overflow-hidden">
                <p className="truncate text-sm font-medium">Jane Doe</p>
                <p className="truncate text-xs text-foreground/50">jane@acme.com</p>
              </div>
            </div>
          </Sidebar.Footer>
        </Sidebar>
        <Sidebar.Main>
          <div className="p-6">
            <h2 className="text-xl font-bold">Complex Sidebar</h2>
            <p className="mt-2 text-sm text-foreground/60">
              Full-featured sidebar with compact spacing, teamspaces, agents, favorites, recents, and
              utility footer.
            </p>
          </div>
        </Sidebar.Main>
      </Sidebar.Provider>
    </div>
  );
}
