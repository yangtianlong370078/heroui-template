"use client";

import {ChartBar, Folder, Gear, House} from "@gravity-ui/icons";
import {AppLayout, Navbar, Sidebar} from "@heroui-pro/react";

const navItems = [
  {href: "#", icon: <House />, label: "Home"},
  {href: "#", icon: <ChartBar />, label: "Analytics"},
  {href: "#", icon: <Folder />, label: "Projects"},
  {href: "#", icon: <Gear />, label: "Settings"},
];

function AppLayoutOffcanvasSidebarNav() {
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

function AppLayoutOffcanvasSidebarHeader() {
  return (
    <Sidebar.Header>
      <div className="px-2 text-sm font-bold">HeroUI Pro</div>
    </Sidebar.Header>
  );
}

export default function AppLayoutOffcanvasDemo() {
  return (
    <div className="h-[550px] w-full overflow-hidden rounded-xl border">
      <AppLayout
        sidebarCollapsible="offcanvas"
        sidebar={
          <>
            <Sidebar>
              <AppLayoutOffcanvasSidebarHeader />
              <AppLayoutOffcanvasSidebarNav />
            </Sidebar>
            <Sidebar.Mobile>
              <AppLayoutOffcanvasSidebarHeader />
              <AppLayoutOffcanvasSidebarNav />
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
          <h2 className="text-xl font-bold">Offcanvas Sidebar</h2>
          <p className="mt-2 text-sm text-foreground/60">
            <code>sidebarCollapsible="offcanvas"</code> — the sidebar slides fully off-screen when
            collapsed, giving the main content area the full width.
          </p>
        </div>
      </AppLayout>
    </div>
  );
}
