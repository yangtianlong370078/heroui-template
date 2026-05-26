"use client";

import {FileTree} from "@heroui-pro/react";

export default function FileTreeDemo() {
  return (
    <FileTree
      aria-label="Project structure"
      className="max-h-[420px] w-80"
      defaultExpandedKeys={["apps", "frontend", "packages"]}
    >
      <FileTree.Item id="apps" textValue="apps" title="apps">
        <FileTree.Item id="frontend" textValue="frontend" title="frontend">
          <FileTree.Item id="fe-package" textValue="package.json" title="package.json" />
          <FileTree.Item id="fe-tsconfig" textValue="tsconfig.json" title="tsconfig.json" />
          <FileTree.Item id="fe-src" textValue="src" title="src">
            <FileTree.Item id="fe-app" textValue="app" title="app">
              <FileTree.Item id="fe-layout" textValue="layout.tsx" title="layout.tsx" />
              <FileTree.Item id="fe-page" textValue="page.tsx" title="page.tsx" />
            </FileTree.Item>
          </FileTree.Item>
        </FileTree.Item>
        <FileTree.Item id="api" textValue="api" title="api">
          <FileTree.Item id="api-package" textValue="package.json" title="package.json" />
          <FileTree.Item id="api-src" textValue="src" title="src">
            <FileTree.Item id="api-index" textValue="index.ts" title="index.ts" />
            <FileTree.Item id="api-routes" textValue="routes.ts" title="routes.ts" />
          </FileTree.Item>
        </FileTree.Item>
      </FileTree.Item>
      <FileTree.Item id="packages" textValue="packages" title="packages">
        <FileTree.Item id="packages-react" textValue="react" title="react">
          <FileTree.Item id="pr-package" textValue="package.json" title="package.json" />
          <FileTree.Item id="pr-src" textValue="src" title="src">
            <FileTree.Item id="pr-index" textValue="index.ts" title="index.ts" />
          </FileTree.Item>
        </FileTree.Item>
      </FileTree.Item>
      <FileTree.Item id="readme" textValue="README.md" title="README.md" />
      <FileTree.Item id="root-package" textValue="package.json" title="package.json" />
      <FileTree.Item id="root-tsconfig" textValue="tsconfig.json" title="tsconfig.json" />
    </FileTree>
  );
}
