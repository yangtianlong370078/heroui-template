"use client";

import {ChartLine, Clock, Flag, LayoutList, PersonPencil, TrashBin} from "@gravity-ui/icons";
import {Button, Kbd} from "@heroui/react";
import {useState} from "react";

import {Command} from "@heroui-pro/react";

const minimalItemClass =
  "rounded-none before:absolute before:left-0 before:top-1/2 before:h-4/5 before:w-0.5 before:-translate-y-1/2 before:scale-y-0 before:rounded-full before:bg-primary before:opacity-0 before:transition-transform data-[focused]:before:scale-y-100 data-[focused]:before:opacity-100 data-[selected]:before:scale-y-100 data-[selected]:before:opacity-100";

const items = [
  {id: "analytics", icon: <ChartLine />, label: "Analytics", keys: ["G", "A"]},
  {id: "issues", icon: <LayoutList />, label: "Issues", keys: ["G", "I"]},
  {id: "milestones", icon: <Flag />, label: "Milestones", keys: ["G", "M"]},
  {id: "history", icon: <Clock />, label: "History", keys: ["G", "H"]},
  {id: "profile", icon: <PersonPencil />, label: "Profile", keys: ["G", "P"]},
  {id: "trash", icon: <TrashBin />, label: "Trash", keys: ["G", "T"]},
];

export default function CommandMinimalDemo() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button variant="outline" onPress={() => setOpen(true)}>
        Minimal{" "}
        <Kbd>
          <Kbd.Abbr keyValue="command" />
          <Kbd.Content>K</Kbd.Content>
        </Kbd>
      </Button>
      <Command>
        <Command.Backdrop isOpen={isOpen} onOpenChange={setOpen}>
          <Command.Container>
            <Command.Dialog>
              <Command.InputGroup>
                <Command.InputGroup.Input placeholder="Go to..." />
                <Command.InputGroup.ClearButton />
              </Command.InputGroup>
              <Command.List
                renderEmptyState={() => (
                  <div className="text-muted flex h-12 items-center justify-center text-sm">
                    No results found.
                  </div>
                )}
              >
                {items.map((item) => (
                  <Command.Item key={item.id} className={minimalItemClass} textValue={item.label}>
                    {item.icon}
                    <span>{item.label}</span>
                    <div className="ml-auto flex gap-1">
                      {item.keys.map((k) => (
                        <kbd
                          key={k}
                          className="bg-default flex size-5 items-center justify-center rounded text-[11px] uppercase text-zinc-500 dark:text-zinc-400"
                        >
                          {k}
                        </kbd>
                      ))}
                    </div>
                  </Command.Item>
                ))}
              </Command.List>
              <Command.Footer>
                <span className="text-muted text-xs">
                  Navigate with{" "}
                  <kbd className="bg-default rounded px-1 text-[11px]">↑</kbd>{" "}
                  <kbd className="bg-default rounded px-1 text-[11px]">↓</kbd>
                </span>
                <span className="text-muted text-xs">
                  Select with{" "}
                  <kbd className="bg-default rounded px-1 text-[11px]">↵</kbd>
                </span>
              </Command.Footer>
            </Command.Dialog>
          </Command.Container>
        </Command.Backdrop>
      </Command>
    </>
  );
}
