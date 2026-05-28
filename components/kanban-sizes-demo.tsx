"use client";

import {Chip} from "@heroui/react";
import {Kanban, useKanban} from "@heroui-pro/react";

interface SizeTask {
  id: string;
  priority: "High" | "Medium" | "Low";
  status: string;
  title: string;
}

const sizeTasks: SizeTask[] = [
  {id: "s1", priority: "High", status: "Open", title: "Design homepage mockup"},
  {id: "s2", priority: "Medium", status: "Open", title: "Set up CI/CD pipeline"},
  {id: "s3", priority: "High", status: "In Progress", title: "Build auth system"},
  {id: "s4", priority: "Low", status: "In Progress", title: "Write API docs"},
  {id: "s5", priority: "Low", status: "Done", title: "Configure Tailwind"},
];

const priorityColor: Record<string, "danger" | "warning" | "success"> = {
  High: "danger",
  Low: "success",
  Medium: "warning",
};

const sizeColumns = ["Open", "In Progress", "Done"];

function SizeBoard({size}: {size: "sm" | "md" | "lg"}) {
  const kanban = useKanban<SizeTask>({
    getColumn: (item) => item.status,
    initialItems: sizeTasks,
    setColumn: (item, column) => ({...item, status: column}),
  });

  return (
    <div className="flex flex-col gap-2">
      <span className="text-muted text-xs font-medium">{size}</span>
      <Kanban size={size}>
        {sizeColumns.map((col) => {
          const colItems = kanban.list.items.filter((t) => t.status === col);

          return (
            <Kanban.Column key={col}>
              <Kanban.ColumnHeader>
                <Kanban.ColumnTitle>{col}</Kanban.ColumnTitle>
                <Kanban.ColumnCount>{colItems.length}</Kanban.ColumnCount>
              </Kanban.ColumnHeader>
              <Kanban.ColumnBody>
                <Kanban.CardList
                  aria-label={col}
                  items={colItems}
                  renderEmptyState={() => "No tasks."}
                >
                  {(task) => (
                    <Kanban.Card textValue={task.title}>
                      <div className="flex flex-col gap-1">
                        <span className="font-medium">{task.title}</span>
                        <Chip color={priorityColor[task.priority]} size="sm" variant="soft">
                          {task.priority}
                        </Chip>
                      </div>
                    </Kanban.Card>
                  )}
                </Kanban.CardList>
              </Kanban.ColumnBody>
            </Kanban.Column>
          );
        })}
      </Kanban>
    </div>
  );
}

export default function KanbanSizesDemo() {
  return (
    <div className="flex flex-col gap-10">
      {(["sm", "md", "lg"] as const).map((size) => (
        <SizeBoard key={size} size={size} />
      ))}
    </div>
  );
}
