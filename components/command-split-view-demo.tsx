"use client";

import {
  CircleFill,
  FontCursor,
  Magnifier,
  PersonFill,
  Sliders,
  Square,
  Tag,
  ToggleOn,
} from "@gravity-ui/icons";
import {Avatar, Button, Chip, Input, Kbd, RadioGroup, Radio, Slider, Switch} from "@heroui/react";
import {useState} from "react";

import {Command} from "@heroui-pro/react";

const componentNames = ["Button", "Input", "Radio", "Chip", "Slider", "Avatar", "Switch"] as const;
type ComponentName = (typeof componentNames)[number];

function SplitViewPreview({component}: {component: ComponentName}) {
  switch (component) {
    case "Button":
      return (
        <div className="flex flex-col gap-2">
          <Button size="sm" variant="solid" color="primary">
            Primary
          </Button>
          <Button size="sm" variant="outline">
            Outline
          </Button>
          <Button size="sm" variant="ghost">
            Ghost
          </Button>
        </div>
      );
    case "Input":
      return (
        <div className="flex flex-col gap-2 w-full">
          <Input size="sm" placeholder="Default input" />
          <Input size="sm" placeholder="With label" label="Label" />
        </div>
      );
    case "Radio":
      return (
        <RadioGroup defaultValue="option1" size="sm">
          <Radio value="option1">Option 1</Radio>
          <Radio value="option2">Option 2</Radio>
          <Radio value="option3">Option 3</Radio>
        </RadioGroup>
      );
    case "Chip":
      return (
        <div className="flex flex-wrap gap-2">
          <Chip size="sm" color="primary">
            Primary
          </Chip>
          <Chip size="sm" color="success">
            Success
          </Chip>
          <Chip size="sm" color="warning">
            Warning
          </Chip>
          <Chip size="sm" color="danger">
            Danger
          </Chip>
        </div>
      );
    case "Slider":
      return (
        <div className="w-full px-2">
          <Slider defaultValue={40} size="sm" />
        </div>
      );
    case "Avatar":
      return (
        <div className="flex gap-2">
          <Avatar size="sm" name="John Doe" />
          <Avatar size="sm" name="Jane Smith" color="primary" />
          <Avatar size="sm" name="Alex" color="success" />
        </div>
      );
    case "Switch":
      return (
        <div className="flex flex-col gap-2">
          <Switch defaultSelected size="sm">
            Enabled
          </Switch>
          <Switch size="sm">Disabled</Switch>
        </div>
      );
    default:
      return null;
  }
}

const iconMap: Record<ComponentName, React.ReactNode> = {
  Button: <Square />,
  Input: <FontCursor />,
  Radio: <CircleFill />,
  Chip: <Tag />,
  Slider: <Sliders />,
  Avatar: <PersonFill />,
  Switch: <ToggleOn />,
};

export default function CommandSplitViewDemo() {
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState<ComponentName>("Button");

  return (
    <>
      <Button variant="outline" onPress={() => setOpen(true)}>
        Split View{" "}
        <Kbd>
          <Kbd.Abbr keyValue="command" />
          <Kbd.Content>K</Kbd.Content>
        </Kbd>
      </Button>
      <Command>
        <Command.Backdrop isOpen={isOpen} onOpenChange={setOpen}>
          <Command.Container size="lg">
            <Command.Dialog>
              <Command.InputGroup>
                <Command.InputGroup.Prefix>
                  <Magnifier />
                </Command.InputGroup.Prefix>
                <Command.InputGroup.Input placeholder="Search components..." />
                <Command.InputGroup.ClearButton />
              </Command.InputGroup>
              <div className="flex">
                <Command.List
                  className="!w-2/5 !flex-none"
                  onAction={(key) => setSelected(key as ComponentName)}
                  renderEmptyState={() => (
                    <div className="text-muted flex h-12 items-center justify-center text-sm">
                      No results found.
                    </div>
                  )}
                >
                  <Command.Group heading="Components">
                    {componentNames.map((name) => (
                      <Command.Item
                        key={name}
                        id={name}
                        textValue={name}
                        className={selected === name ? "bg-default" : ""}
                      >
                        {iconMap[name]}
                        <span>{name}</span>
                      </Command.Item>
                    ))}
                  </Command.Group>
                </Command.List>
                <div className="border-divider flex w-3/5 flex-col gap-3 border-l p-4">
                  <div>
                    <p className="text-sm font-semibold">{selected}</p>
                    <p className="text-muted text-xs">HeroUI React Component</p>
                  </div>
                  <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed p-4">
                    <SplitViewPreview component={selected} />
                  </div>
                </div>
              </div>
            </Command.Dialog>
          </Command.Container>
        </Command.Backdrop>
      </Command>
    </>
  );
}
