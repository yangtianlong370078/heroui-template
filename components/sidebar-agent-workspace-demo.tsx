"use client";

import {Comment, FolderCode, Gear, Plus} from "@gravity-ui/icons";
import {Button} from "@heroui/react";
import {Sidebar} from "@heroui-pro/react";
import React from "react";

const repos = [
  {
    name: "heroui/heroui",
    tasks: [{label: "Fix button variant"}, {label: "Update design tokens"}],
  },
  {
    name: "heroui/pro",
    tasks: [
      {label: "Sidebar collapsible"},
      {label: "Agent workspace"},
      {label: "Chart crosshair"},
    ],
  },
  {
    name: "heroui/docs",
    tasks: [{label: "Update API reference"}, {label: "Add migration guide"}],
  },
];

export default function SidebarAgentWorkspaceDemo() {
  return (
    <div
      className="h-[600px] w-full overflow-hidden rounded-xl border"
      style={{"--spacing": "0.22rem"} as React.CSSProperties}
    >
      <Sidebar.Provider toggleShortcut={false}>
        <Sidebar>
          <Sidebar.Header>
            <div className="flex items-center justify-between px-2">
              <span className="text-sm font-bold">Workspace</span>
              <Button isIconOnly size="sm" variant="ghost">
                <Plus className="size-4" />
              </Button>
            </div>
          </Sidebar.Header>
          <Sidebar.Content>
            {repos.map((repo) => (
              <Sidebar.Group key={repo.name}>
                <Sidebar.GroupLabel>
                  <FolderCode className="mr-1 inline size-3.5" />
                  {repo.name}
                </Sidebar.GroupLabel>
                <Sidebar.Menu>
                  {repo.tasks.map((task) => (
                    <Sidebar.MenuItem key={task.label} textValue={task.label}>
                      <Sidebar.MenuIcon>
                        <Comment />
                      </Sidebar.MenuIcon>
                      <Sidebar.MenuLabel>{task.label}</Sidebar.MenuLabel>
                    </Sidebar.MenuItem>
                  ))}
                </Sidebar.Menu>
              </Sidebar.Group>
            ))}
          </Sidebar.Content>
          <Sidebar.Footer>
            <Sidebar.Menu>
              <Sidebar.MenuItem textValue="Settings">
                <Sidebar.MenuIcon>
                  <Gear />
                </Sidebar.MenuIcon>
                <Sidebar.MenuLabel>Settings</Sidebar.MenuLabel>
              </Sidebar.MenuItem>
            </Sidebar.Menu>
          </Sidebar.Footer>
        </Sidebar>
        <Sidebar.Main>
          <div className="p-6">
            <h2 className="text-xl font-bold">Agent Workspace</h2>
            <p className="mt-2 text-sm text-foreground/60">
              Workspace sidebar with agent tasks grouped by repository, inspired by AI coding tools.
            </p>
          </div>
        </Sidebar.Main>
      </Sidebar.Provider>
    </div>
  );
}
