"use client";

import type {DataGridColumn} from "@heroui-pro/react";

import {Chip} from "@heroui/react";
import {DataGrid} from "@heroui-pro/react";

interface Payment {
  amount: number;
  customer: string;
  date: string;
  id: string;
  method: string;
  status: "succeeded" | "failed" | "pending";
}

const columns: DataGridColumn<Payment>[] = [
  {
    id: "customer",
    header: "Customer",
    accessorKey: "customer",
    isRowHeader: true,
    allowsSorting: true,
  },
  {
    id: "amount",
    header: "Amount",
    accessorKey: "amount",
    align: "end",
    allowsSorting: true,
    cell: (item) => `$${item.amount.toFixed(2)}`,
  },
  {
    id: "status",
    header: "Status",
    accessorKey: "status",
    cell: (item) => (
      <Chip
        color={
          item.status === "succeeded"
            ? "success"
            : item.status === "failed"
              ? "danger"
              : "warning"
        }
        size="sm"
        variant="soft"
      >
        {item.status}
      </Chip>
    ),
  },
  {
    id: "method",
    header: "Method",
    accessorKey: "method",
  },
  {
    id: "date",
    header: "Date",
    accessorKey: "date",
    allowsSorting: true,
  },
];

const payments: Payment[] = [
  {amount: 250.0, customer: "Alice Johnson", date: "2025-01-15", id: "p1", method: "Visa", status: "succeeded"},
  {amount: 125.5, customer: "Bob Smith", date: "2025-01-16", id: "p2", method: "Mastercard", status: "succeeded"},
  {amount: 89.99, customer: "Carol White", date: "2025-01-17", id: "p3", method: "PayPal", status: "failed"},
  {amount: 450.0, customer: "David Lee", date: "2025-01-18", id: "p4", method: "Amex", status: "pending"},
  {amount: 320.75, customer: "Eve Davis", date: "2025-01-19", id: "p5", method: "Visa", status: "succeeded"},
  {amount: 175.0, customer: "Frank Miller", date: "2025-01-20", id: "p6", method: "Mastercard", status: "succeeded"},
  {amount: 95.25, customer: "Grace Wilson", date: "2025-01-21", id: "p7", method: "PayPal", status: "failed"},
];

export default function DataGridDemo() {
  return (
    <div className="w-full max-w-[800px] rounded-2xl">
      <DataGrid
        aria-label="Payments"
        columns={columns}
        data={payments}
        defaultSortDescriptor={{column: "date", direction: "descending"}}
        getRowId={(item) => item.id}
        selectionMode="multiple"
        showSelectionCheckboxes
      />
    </div>
  );
}
