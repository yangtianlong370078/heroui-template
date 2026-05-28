"use client";

import {BookOpen, Code, House, LayoutList} from "@gravity-ui/icons";
import {Sidebar} from "@heroui-pro/react";

export default function SidebarCollapsibleGroupsDemo() {
  return (
    <div className="h-[550px] w-full overflow-hidden rounded-xl border">
      <Sidebar.Provider toggleShortcut={false}>
        <Sidebar>
          <Sidebar.Header>
            <div className="px-2 text-sm font-bold">HeroUI Docs</div>
          </Sidebar.Header>
          <Sidebar.Content>
            <Sidebar.Menu showGuideLines>
              <Sidebar.MenuItem textValue="Getting Started">
                <Sidebar.MenuIcon>
                  <House />
                </Sidebar.MenuIcon>
                <Sidebar.MenuLabel>
                  Getting Started
                  <Sidebar.MenuTrigger>
                    <Sidebar.MenuIndicator />
                  </Sidebar.MenuTrigger>
                </Sidebar.MenuLabel>
                <Sidebar.Submenu>
                  <Sidebar.MenuItem textValue="Introduction">
                    <Sidebar.MenuLabel>Introduction</Sidebar.MenuLabel>
                  </Sidebar.MenuItem>
                  <Sidebar.MenuItem textValue="Installation">
                    <Sidebar.MenuLabel>Installation</Sidebar.MenuLabel>
                  </Sidebar.MenuItem>
                  <Sidebar.MenuItem textValue="Quick Start">
                    <Sidebar.MenuLabel>Quick Start</Sidebar.MenuLabel>
                  </Sidebar.MenuItem>
                </Sidebar.Submenu>
              </Sidebar.MenuItem>

              <Sidebar.MenuItem textValue="Components">
                <Sidebar.MenuIcon>
                  <LayoutList />
                </Sidebar.MenuIcon>
                <Sidebar.MenuLabel>
                  Components
                  <Sidebar.MenuTrigger>
                    <Sidebar.MenuIndicator />
                  </Sidebar.MenuTrigger>
                </Sidebar.MenuLabel>
                <Sidebar.Submenu>
                  <Sidebar.MenuItem textValue="Button">
                    <Sidebar.MenuLabel>Button</Sidebar.MenuLabel>
                  </Sidebar.MenuItem>
                  <Sidebar.MenuItem textValue="Input">
                    <Sidebar.MenuLabel>Input</Sidebar.MenuLabel>
                  </Sidebar.MenuItem>
                  <Sidebar.MenuItem textValue="Modal">
                    <Sidebar.MenuLabel>Modal</Sidebar.MenuLabel>
                  </Sidebar.MenuItem>
                  <Sidebar.MenuItem textValue="Sidebar">
                    <Sidebar.MenuLabel>Sidebar</Sidebar.MenuLabel>
                  </Sidebar.MenuItem>
                </Sidebar.Submenu>
              </Sidebar.MenuItem>

              <Sidebar.MenuItem textValue="API Reference">
                <Sidebar.MenuIcon>
                  <Code />
                </Sidebar.MenuIcon>
                <Sidebar.MenuLabel>
                  API Reference
                  <Sidebar.MenuTrigger>
                    <Sidebar.MenuIndicator />
                  </Sidebar.MenuTrigger>
                </Sidebar.MenuLabel>
                <Sidebar.Submenu>
                  <Sidebar.MenuItem textValue="Hooks">
                    <Sidebar.MenuLabel>Hooks</Sidebar.MenuLabel>
                  </Sidebar.MenuItem>
                  <Sidebar.MenuItem textValue="Utilities">
                    <Sidebar.MenuLabel>Utilities</Sidebar.MenuLabel>
                  </Sidebar.MenuItem>
                </Sidebar.Submenu>
              </Sidebar.MenuItem>

              <Sidebar.MenuItem textValue="Guides">
                <Sidebar.MenuIcon>
                  <BookOpen />
                </Sidebar.MenuIcon>
                <Sidebar.MenuLabel>Guides</Sidebar.MenuLabel>
              </Sidebar.MenuItem>
            </Sidebar.Menu>
          </Sidebar.Content>
        </Sidebar>
        <Sidebar.Main>
          <div className="p-6">
            <h2 className="text-xl font-bold">Collapsible Groups</h2>
            <p className="mt-2 text-sm text-foreground/60">
              Expandable/collapsible groups for documentation-style navigation with guide lines.
            </p>
          </div>
        </Sidebar.Main>
      </Sidebar.Provider>
    </div>
  );
}
