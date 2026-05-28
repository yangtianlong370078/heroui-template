"use client";

import {FilePlus, FolderPlus, Magnifier, Palette, PersonPencil} from "@gravity-ui/icons";
import {Button, Kbd} from "@heroui/react";
import {useState} from "react";

import {Command, EmptyState} from "@heroui-pro/react";

type BackdropVariant = "transparent" | "opaque" | "blur";

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

export default function CommandBackdropVariantsDemo() {
  const [isOpen, setOpen] = useState(false);
  const [variant, setVariant] = useState<BackdropVariant>("blur");

  function open(v: BackdropVariant) {
    setVariant(v);
    setOpen(true);
  }

  return (
    <>
      <div className="flex gap-2">
        <Button size="sm" variant="outline" onPress={() => open("transparent")}>
          Transparent
        </Button>
        <Button size="sm" variant="outline" onPress={() => open("opaque")}>
          Opaque
        </Button>
        <Button size="sm" variant="outline" onPress={() => open("blur")}>
          Blur
        </Button>
      </div>
      <Command>
        <Command.Backdrop isOpen={isOpen} onOpenChange={setOpen} variant={variant}>
          <Command.Container>
            <Command.Dialog>
              <CommandDialogContent />
            </Command.Dialog>
          </Command.Container>
        </Command.Backdrop>
      </Command>
    </>
  );
}
