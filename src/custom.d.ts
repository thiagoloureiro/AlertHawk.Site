declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

interface WebMcpTool {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: (args: Record<string, unknown>) => Promise<unknown>;
}

interface ModelContext {
  registerTool: (tool: WebMcpTool, options?: { signal?: AbortSignal }) => void;
}

interface Navigator {
  modelContext?: ModelContext;
} 