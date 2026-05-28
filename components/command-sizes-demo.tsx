"use client";

import {FilePlus, FolderPlus, Magnifier, Palette, PersonPencil} from "@gravity-ui/icons";
import {Button, Kbd} from "@heroui/react";
import {useState} from "react";

import {Command, EmptyState} from "@heroui-pro/react";

type CommandSize = "sm" | "md" | "lg";

function CommandDialogContent() {
  return (
    <>
      <Command.InputGroup>
        <Command.InputGroup.Prefix>
          <Magnifier />
        </Command.InputGroup.Prefix>
        <Command.InputGroup.Input placeholder="Type a command or search..." />
        <Command.InputGroup.ClearButton />
      </Command.InputGroup>
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
        <Command.Group heading="Suggestions">
          <Command.Item textValue="Edit Profile">
            <PersonPencil />
            <span>Edit Profile</span>
            <Kbd className="ms-auto text-xs" slot="keyboard">
              <Kbd.Abbr keyValue="command" />
              <Kbd.Content>E</Kbd.Content>
            </Kbd>
          </Command.Item>
          <Command.Item textValue="Themes">
            <Palette />
            <span>Themes</span>
            <Kbd className="ms-auto text-xs" slot="keyboard">
              <Kbd.Abbr keyValue="command" />
              <Kbd.Content>T</Kbd.Content>
            </Kbd>
          </Command.Item>
        </Command.Group>
        <Command.Group heading="Files">
          <Command.Item textValue="New File">
            <FilePlus />
            <span>New File</span>
            <Kbd className="ms-auto text-xs" slot="keyboard">
              <Kbd.Abbr keyValue="command" />
              <Kbd.Content>N</Kbd.Content>
            </Kbd>
          </Command.Item>
          <Command.Item textValue="New Folder">
            <FolderPlus />
            <span>New Folder</span>
            <Kbd className="ms-auto text-xs" slot="keyboard">
              <Kbd.Abbr keyValue="command" />
              <Kbd.Content>F</Kbd.Content>
            </Kbd>
          </Command.Item>
        </Command.Group>
      </Command.List>
    </>
  );
}

export default function CommandSizesDemo() {
  const [isOpen, setOpen] = useState(false);
  const [size, setSize] = useState<CommandSize>("md");

  function open(s: CommandSize) {
    setSize(s);
    setOpen(true);
  }

  return (
    <>
      <div className="flex gap-2">
        <Button size="sm" variant="outline" onPress={() => open("sm")}>
          Small
        </Button>
        <Button size="sm" variant="outline" onPress={() => open("md")}>
          Medium
        </Button>
        <Button size="sm" variant="outline" onPress={() => open("lg")}>
          Large
        </Button>
      </div>
      <Command>
        <Command.Backdrop isOpen={isOpen} onOpenChange={setOpen}>
          <Command.Container size={size}>
            <Command.Dialog>
              <CommandDialogContent />
            </Command.Dialog>
          </Command.Container>
        </Command.Backdrop>
      </Command>
    </>
  );
}
