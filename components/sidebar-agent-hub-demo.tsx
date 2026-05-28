"use client";

import {Comment, EllipsisVertical, Folder, Plus} from "@gravity-ui/icons";
import {Avatar, Button, Dropdown, Label, Separator} from "@heroui/react";
import {Sidebar} from "@heroui-pro/react";
import React from "react";

const workspaceItems = [
  {label: "My Workspace"},
  {label: "Team Space"},
];

const recentChats = [
  {label: "Refactor auth module"},
  {label: "Write unit tests"},
  {label: "Review PR #142"},
  {label: "Design API schema"},
];

export default function SidebarAgentHubDemo() {
  return (
    <div
      className="h-[550px] w-full overflow-hidden rounded-xl border"
      style={{"--spacing": "0.22rem"} as React.CSSProperties}
    >
      <Sidebar.Provider toggleShortcut={false}>
        <Sidebar>
          <Sidebar.Header>
            <div className="flex items-center justify-between px-2">
              <span className="text-sm font-bold">Agent Hub</span>
              <Button isIconOnly size="sm" variant="ghost">
                <Plus className="size-4" />
              </Button>
            </div>
          </Sidebar.Header>
          <Sidebar.Content>
            <Sidebar.Group>
              <Sidebar.GroupLabel>Workspaces</Sidebar.GroupLabel>
              <Sidebar.Menu>
                {workspaceItems.map((item) => (
                  <Sidebar.MenuItem key={item.label} textValue={item.label}>
                    <Sidebar.MenuIcon>
                      <Folder />
                    </Sidebar.MenuIcon>
                    <Sidebar.MenuLabel>{item.label}</Sidebar.MenuLabel>
                  </Sidebar.MenuItem>
                ))}
              </Sidebar.Menu>
            </Sidebar.Group>
            <Sidebar.Separator />
            <Sidebar.Group>
              <Sidebar.GroupLabel>Recent Chats</Sidebar.GroupLabel>
              <Sidebar.Menu>
                {recentChats.map((item) => (
                  <Sidebar.MenuItem key={item.label} textValue={item.label}>
                    <Sidebar.MenuIcon>
                      <Comment />
                    </Sidebar.MenuIcon>
                    <Sidebar.MenuLabel>{item.label}</Sidebar.MenuLabel>
                  </Sidebar.MenuItem>
                ))}
              </Sidebar.Menu>
            </Sidebar.Group>
          </Sidebar.Content>
          <Sidebar.Footer>
            <Dropdown>
              <Button
                className="h-auto w-full justify-start gap-2 px-2 py-1.5"
                variant="ghost"
              >
                <Avatar size="sm">
                  <Avatar.Fallback>AH</Avatar.Fallback>
                </Avatar>
                <div className="min-w-0 flex-1 overflow-hidden text-left">
                  <p className="truncate text-sm font-medium">Alex Hub</p>
                  <p className="truncate text-xs text-foreground/50">alex@example.com</p>
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
            <h2 className="text-xl font-bold">Agent Hub</h2>
            <p className="mt-2 text-sm text-foreground/60">
              Agent-focused sidebar combining compact spacing, workspaces, recent chats, and a user
              dropdown.
            </p>
          </div>
        </Sidebar.Main>
      </Sidebar.Provider>
    </div>
  );
}
