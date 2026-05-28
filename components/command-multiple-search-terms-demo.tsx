"use client";

import {Clock, FileText, Gear, Magnifier, Persons, Sparkles} from "@gravity-ui/icons";
import {Button, Chip, Kbd} from "@heroui/react";
import {useState} from "react";

import {Command, EmptyState} from "@heroui-pro/react";

const suggestions = [
  "Show me recent pull requests",
  "What issues are assigned to me?",
  "Summarize activity from last week",
];

const filters = [
  {id: "issues", label: "Issues"},
  {id: "prs", label: "Pull Requests"},
  {id: "teams", label: "Teams"},
];

export default function CommandMultipleSearchTermsDemo() {
  const [isOpen, setOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  function toggleFilter(id: string) {
    setActiveFilters((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id],
    );
  }

  return (
    <>
      <Button variant="outline" onPress={() => setOpen(true)}>
        Multiple Terms{" "}
        <Kbd>
          <Kbd.Abbr keyValue="command" />
          <Kbd.Content>K</Kbd.Content>
        </Kbd>
      </Button>
      <Command>
        <Command.Backdrop isOpen={isOpen} onOpenChange={setOpen}>
          <Command.Container>
            <Command.Dialog>
              <Command.Header className="flex flex-col gap-2 px-3 pt-3">
                <Command.InputGroup>
                  <Command.InputGroup.Prefix>
                    <Magnifier />
                  </Command.InputGroup.Prefix>
                  <Command.InputGroup.Input placeholder="Search or ask anything..." />
                  <Command.InputGroup.ClearButton />
                </Command.InputGroup>
                {filters.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {filters.map((f) => (
                      <Chip
                        key={f.id}
                        size="sm"
                        variant={activeFilters.includes(f.id) ? "solid" : "flat"}
                        color={activeFilters.includes(f.id) ? "primary" : "default"}
                        className="cursor-pointer"
                        onPress={() => toggleFilter(f.id)}
                      >
                        {f.label}
                      </Chip>
                    ))}
                  </div>
                )}
              </Command.Header>
              <Command.List
                renderEmptyState={() => (
                  <EmptyState size="sm">
                    <EmptyState.Header>
                      <EmptyState.Media variant="icon">
                        <Magnifier />
                      </EmptyState.Media>
                      <EmptyState.Title>No results found</EmptyState.Title>
                      <EmptyState.Description>Try a different search term.</EmptyState.Description>
                    </EmptyState.Header>
                  </EmptyState>
                )}
              >
                <Command.Group heading="Smart Prompt Examples">
                  {suggestions.map((s, i) => (
                    <Command.Item key={i} textValue={s}>
                      <Sparkles />
                      <span>{s}</span>
                    </Command.Item>
                  ))}
                </Command.Group>
                <Command.Group heading="Results">
                  <Command.Item textValue="Recent Activity">
                    <Clock />
                    <span>Recent Activity</span>
                  </Command.Item>
                  <Command.Item textValue="Team Members">
                    <Persons />
                    <span>Team Members</span>
                  </Command.Item>
                  <Command.Item textValue="Settings">
                    <Gear />
                    <span>Settings</span>
                  </Command.Item>
                  <Command.Item textValue="Documentation">
                    <FileText />
                    <span>Documentation</span>
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command.Dialog>
          </Command.Container>
        </Command.Backdrop>
      </Command>
    </>
  );
}
