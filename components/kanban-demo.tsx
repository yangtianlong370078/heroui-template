"use client";

import {Chip} from "@heroui/react";
import {Kanban} from "@heroui-pro/react";

interface Task {
  id: string;
  status: string;
  title: string;
  priority: "High" | "Medium" | "Low";
}

const tasks: Task[] = [
  {id: "t1", status: "Todo", title: "Design homepage mockup", priority: "High"},
  {id: "t2", status: "Todo", title: "Set up CI/CD pipeline", priority: "Medium"},
  {id: "t3", status: "In Progress", title: "Build auth system", priority: "High"},
  {id: "t4", status: "In Progress", title: "Write API docs", priority: "Low"},
  {id: "t5", status: "Done", title: "Configure Tailwind", priority: "Low"},
  {id: "t6", status: "Done", title: "Set up repository", priority: "Medium"},
];

const columns = ["Todo", "In Progress", "Done"];

const priorityColor: Record<string, "danger" | "warning" | "success"> = {
  High: "danger",
  Medium: "warning",
  Low: "success",
};

export default function KanbanDemo() {
  return (
    <div className="w-full overflow-x-auto rounded-2xl p-2">
      <Kanban>
        {columns.map((col) => {
          const colTasks = tasks.filter((t) => t.status === col);

          return (
            <Kanban.Column key={col}>
              <Kanban.ColumnHeader>
                <Kanban.ColumnTitle>{col}</Kanban.ColumnTitle>
                <Kanban.ColumnCount>{colTasks.length}</Kanban.ColumnCount>
              </Kanban.ColumnHeader>
              <Kanban.ColumnBody>
                <Kanban.CardList aria-label={col} items={colTasks}>
                  {(task) => (
                    <Kanban.Card id={task.id} textValue={task.title}>
                      <div className="flex flex-col gap-2 p-1">
                        <span className="text-sm font-medium">{task.title}</span>
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
