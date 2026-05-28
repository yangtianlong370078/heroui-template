"use client";

import {ChartBar, Folder, Gear, House} from "@gravity-ui/icons";
import {AppLayout, Navbar, Sidebar} from "@heroui-pro/react";

const navItems = [
  {href: "#", icon: <House />, label: "Home"},
  {href: "#", icon: <ChartBar />, label: "Analytics"},
  {href: "#", icon: <Folder />, label: "Projects"},
  {href: "#", icon: <Gear />, label: "Settings"},
];

function AppLayoutResizableSidebarNav() {
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

function AppLayoutResizableSidebarHeader() {
  return (
    <Sidebar.Header>
      <div className="px-2 text-sm font-bold">HeroUI Pro</div>
    </Sidebar.Header>
  );
}

function ResizableAsidePanel() {
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <h3 className="text-sm font-semibold">Context Panel</h3>
      <p className="text-xs text-foreground/60">
        Drag the handles on either side to resize the sidebar and aside panels.
      </p>
      <div className="rounded-lg border p-3">
        <p className="text-xs font-medium">Activity</p>
        <p className="mt-1 text-xs text-foreground/60">Last updated 2 minutes ago</p>
      </div>
    </div>
  );
}

export default function AppLayoutResizableDemo() {
  return (
    <div className="h-[550px] w-full overflow-hidden rounded-xl border">
      <AppLayout
        asideResizable
        sidebarCollapsible="offcanvas"
        sidebarResizable
        aside={<ResizableAsidePanel />}
        sidebar={
          <>
            <Sidebar>
              <AppLayoutResizableSidebarHeader />
              <AppLayoutResizableSidebarNav />
            </Sidebar>
            <Sidebar.Mobile>
              <AppLayoutResizableSidebarHeader />
              <AppLayoutResizableSidebarNav />
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
          <h2 className="text-xl font-bold">Resizable Sidebar &amp; Aside</h2>
          <p className="mt-2 text-sm text-foreground/60">
            <code>sidebarResizable</code> and <code>asideResizable</code> — drag the handles to
            adjust panel widths. Requires <code>sidebarCollapsible="offcanvas"</code> or{" "}
            <code>"none"</code>.
          </p>
        </div>
      </AppLayout>
    </div>
  );
}
