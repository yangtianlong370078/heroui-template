"use client";

import {Bell, ChartBar, Folder, Gear, House} from "@gravity-ui/icons";
import {AppLayout, Navbar, Sidebar} from "@heroui-pro/react";

const navItems = [
  {href: "#", icon: <House />, label: "Home"},
  {href: "#", icon: <ChartBar />, label: "Analytics"},
  {href: "#", icon: <Folder />, label: "Projects"},
  {href: "#", icon: <Gear />, label: "Settings"},
];

function AppLayoutToolbarFooterSidebarNav() {
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

function AppLayoutToolbarFooterSidebarHeader() {
  return (
    <Sidebar.Header>
      <div className="px-2 text-sm font-bold">HeroUI Pro</div>
    </Sidebar.Header>
  );
}

export default function AppLayoutToolbarFooterDemo() {
  return (
    <div className="h-[550px] w-full overflow-hidden rounded-xl border">
      <AppLayout
        sidebarCollapsible="icon"
        footer={
          <div className="flex items-center justify-between border-t px-4 py-2 text-xs text-foreground/60">
            <span>HeroUI Pro © 2025</span>
            <span>v3.0.0</span>
          </div>
        }
        toolbar={
          <div className="flex items-center gap-2 border-b px-4 py-1.5 text-xs">
            <Bell className="size-3.5" />
            <span className="text-foreground/60">3 new notifications</span>
          </div>
        }
        sidebar={
          <>
            <Sidebar>
              <AppLayoutToolbarFooterSidebarHeader />
              <AppLayoutToolbarFooterSidebarNav />
            </Sidebar>
            <Sidebar.Mobile>
              <AppLayoutToolbarFooterSidebarHeader />
              <AppLayoutToolbarFooterSidebarNav />
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
            </Navbar.Header>
          </Navbar>
        }
      >
        <div className="p-6">
          <h2 className="text-xl font-bold">Toolbar &amp; Footer</h2>
          <p className="mt-2 text-sm text-foreground/60">
            Pass <code>toolbar</code> to render a sticky row below the navbar and <code>footer</code>{" "}
            for a pinned row at the bottom of the body column.
          </p>
        </div>
      </AppLayout>
    </div>
  );
}
