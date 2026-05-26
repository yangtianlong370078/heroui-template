"use client";

import {Button} from "@heroui/react";
import {Navbar} from "@heroui-pro/react";

const navItems = [
  {href: "#features", label: "Features"},
  {href: "#pricing", label: "Pricing"},
  {href: "#docs", label: "Docs"},
  {href: "#blog", label: "Blog"},
];

export default function NavbarProDemo() {
  return (
    <div className="border-border w-full overflow-hidden rounded-xl border">
      <Navbar position="static">
        <Navbar.Header>
          <Navbar.Brand>
            <span className="text-foreground text-sm font-bold">HeroUI Pro</span>
          </Navbar.Brand>
          <Navbar.Content className="hidden sm:flex">
            {navItems.map((item) => (
              <Navbar.Item key={item.label} href={item.href}>
                {item.label}
              </Navbar.Item>
            ))}
          </Navbar.Content>
          <Navbar.Spacer />
          <Navbar.Content>
            <Button size="sm" variant="ghost">
              Login
            </Button>
            <Button size="sm">
              Sign up
            </Button>
          </Navbar.Content>
        </Navbar.Header>
      </Navbar>
    </div>
  );
}
