"use client";

import {ChartBar, Folder, Gear, House} from "@gravity-ui/icons";
import {AppLayout, Navbar, Sidebar} from "@heroui-pro/react";

const navItems = [
  {href: "#", icon: <House />, label: "Home"},
  {href: "#", icon: <ChartBar />, label: "Analytics"},
  {href: "#", icon: <Folder />, label: "Projects"},
  {href: "#", icon: <Gear />, label: "Settings"},
];

function AppLayoutFloatingSidebarNav() {
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

function AppLayoutFloatingSidebarHeader() {
  return (
    <Sidebar.Header>
      <div className="px-2 text-sm font-bold">HeroUI Pro</div>
    </Sidebar.Header>
  );
}

export default function AppLayoutFloatingSidebarDemo() {
  return (
    <div className="h-[550px] w-full overflow-hidden rounded-xl border">
      <AppLayout
        sidebarVariant="floating"
        sidebar={
          <>
            <Sidebar>
              <AppLayoutFloatingSidebarHeader />
              <AppLayoutFloatingSidebarNav />
            </Sidebar>
            <Sidebar.Mobile>
              <AppLayoutFloatingSidebarHeader />
              <AppLayoutFloatingSidebarNav />
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
          <h2 className="text-xl font-bold">Floating Sidebar</h2>
          <p className="mt-2 text-sm text-foreground/60">
            <code>sidebarVariant="floating"</code> — the sidebar is detached from the viewport edge
            with rounded corners and a shadow, a common pattern for product dashboards.
          </p>
        </div>
      </AppLayout>
    </div>
  );
}
