import { siteUrl } from '@/lib/site';

export const appUrl = 'https://app.alerthawk.net';
export const docsUrl = 'https://docs.alerthawk.net';
export const githubUrl = 'https://github.com/thiagoloureiro/AlertHawk';
export const apiBaseUrl = `${appUrl}/api`;
export const healthUrl = `${appUrl}/health`;
export const mcpEndpoint = `${siteUrl}/mcp`;
export const agentRegisterUrl = `${appUrl}/agent/register`;

export const contentSignals = {
  'ai-train': 'no',
  search: 'yes',
  'ai-input': 'yes',
} as const;
