"use client";

import {ChartBar, Folder, Gear, House} from "@gravity-ui/icons";
import {AppLayout, Navbar, Sidebar} from "@heroui-pro/react";

const navItems = [
  {href: "#", icon: <House />, label: "Home"},
  {href: "#", icon: <ChartBar />, label: "Analytics"},
  {href: "#", icon: <Folder />, label: "Projects"},
  {href: "#", icon: <Gear />, label: "Settings"},
];

function AppLayoutWithAsideSidebarNav() {
  return (
    <Sidebar.Content>
      <Sidebar.Main>
        <Sidebar.Menu>
          {navItems.map((item) => (
            <Sidebar.MenuItem key={item.label} href={item.href} textValue={item.label}>
              <Sidebar.MenuIcon>{item.icon}</Sidebar.MenuIcon>
              <Sidebar.MenuLabel>{item.label}</Sidebar.MenuLabel>
            </Sidebar.MenuItem>
          ))}
        </Sidebar.Menu>
      </Sidebar.Main>
    </Sidebar.Content>
  );
}

function AppLayoutWithAsideSidebarHeader() {
  return (
    <Sidebar.Header>
      <div className="px-2 text-sm font-bold">HeroUI Pro</div>
    </Sidebar.Header>
  );
}

function AsidePanel() {
  return (
    <div className="flex h-full flex-col gap-4 p-4">
      <h3 className="text-sm font-semibold">Details Panel</h3>
      <div className="rounded-lg border p-3">
        <p className="text-xs font-medium">Task #1234</p>
        <p className="mt-1 text-xs text-foreground/60">Implement the new dashboard layout with sidebar navigation and responsive breakpoints.</p>
      </div>
      <div className="rounded-lg border p-3">
        <p className="text-xs font-medium">Assignee</p>
        <p className="mt-1 text-xs text-foreground/60">Jane Doe</p>
      </div>
      <div className="rounded-lg border p-3">
        <p className="text-xs font-medium">Due Date</p>
        <p className="mt-1 text-xs text-foreground/60">Dec 31, 2025</p>
      </div>
    </div>
  );
}

export default function AppLayoutWithAsideDemo() {
  return (
    <div className="h-[550px] w-full overflow-hidden rounded-xl border">
      <AppLayout
        aside={<AsidePanel />}
        sidebarCollapsible="icon"
        sidebar={
          <>
            <Sidebar>
              <AppLayoutWithAsideSidebarHeader />
              <AppLayoutWithAsideSidebarNav />
            </Sidebar>
            <Sidebar.Mobile>
              <AppLayoutWithAsideSidebarHeader />
              <AppLayoutWithAsideSidebarNav />
            </Sidebar.Mobile>
          </>
        }
        navbar={
          <Navbar maxWidth="full">
            <Navbar.Header>
              <AppLayout.MenuToggle />
              <Sidebar.Trigger />
              <Navbar.Brand>Dashboard</Navbar.Brand>
              <Navbar.Spacer />
              <AppLayout.AsideTrigger />
            </Navbar.Header>
          </Navbar>
        }
      >
        <div className="p-6">
          <h2 className="text-xl font-bold">With Aside Panel</h2>
          <p className="mt-2 text-sm text-foreground/60">
            Pass content to the <code>aside</code> prop for a right-side panel. Use{" "}
            <code>AppLayout.AsideTrigger</code> in the navbar to toggle it open and closed.
          </p>
        </div>
      </AppLayout>
    </div>
  );
}
