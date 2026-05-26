"use client";

import {FilePlus, FolderPlus, Magnifier, Palette, PersonPencil} from "@gravity-ui/icons";
import {Button} from "@heroui/react";
import {useState} from "react";
import {Command} from "@heroui-pro/react";

export default function CommandDemo() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button variant="outline" onPress={() => setOpen(true)}>
        Open Command Palette ⌘K
      </Button>
      <Command>
        <Command.Backdrop isOpen={isOpen} onOpenChange={setOpen}>
          <Command.Container>
            <Command.Dialog>
              <Command.InputGroup>
                <Command.InputGroup.Prefix>
                  <Magnifier />
                </Command.InputGroup.Prefix>
                <Command.InputGroup.Input placeholder="Type a command or search..." />
                <Command.InputGroup.ClearButton />
              </Command.InputGroup>
              <Command.List>
                <Command.Group heading="Actions">
                  <Command.Item textValue="Create new file">
                    <FilePlus />
                    <span>Create new file...</span>
                  </Command.Item>
                  <Command.Item textValue="Create new folder">
                    <FolderPlus />
                    <span>Create new folder...</span>
                  </Command.Item>
                </Command.Group>
                <Command.Group heading="Settings">
                  <Command.Item textValue="Change theme">
                    <Palette />
                    <span>Change theme</span>
                  </Command.Item>
                  <Command.Item textValue="Edit profile">
                    <PersonPencil />
                    <span>Edit profile</span>
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
