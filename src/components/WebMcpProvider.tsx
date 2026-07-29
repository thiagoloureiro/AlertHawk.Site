'use client';

import { useEffect } from 'react';
import { docsUrl } from '@/lib/agent-discovery/config';

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'how-it-works', label: 'How it Works' },
  { id: 'kubernetes-monitoring', label: 'Kubernetes Monitoring' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'contact', label: 'Contact' },
] as const;

export function WebMcpProvider() {
  useEffect(() => {
    const modelContext = navigator.modelContext;
    if (!modelContext?.registerTool) {
      return;
    }

    const controller = new AbortController();
    const { signal } = controller;

    modelContext.registerTool(
      {
        name: 'navigate_section',
        description: 'Scroll to a section on the AlertHawk homepage',
        inputSchema: {
          type: 'object',
          properties: {
            section: {
              type: 'string',
              enum: SECTIONS.map((s) => s.id),
              description: 'Homepage section ID to navigate to',
            },
          },
          required: ['section'],
        },
        async execute(args: Record<string, unknown>) {
          const section = String(args.section ?? '');
          const element = document.getElementById(section);
          if (!element) {
            return { success: false, error: `Section "${section}" not found` };
          }
          element.scrollIntoView({ behavior: 'smooth' });
          return { success: true, section };
        },
      },
      { signal },
    );

    modelContext.registerTool(
      {
        name: 'list_sections',
        description: 'List available homepage sections on AlertHawk',
        inputSchema: {
          type: 'object',
          properties: {},
        },
        async execute() {
          return { sections: SECTIONS };
        },
      },
      { signal },
    );

    modelContext.registerTool(
      {
        name: 'get_documentation_url',
        description: 'Return the AlertHawk documentation URL',
        inputSchema: {
          type: 'object',
          properties: {},
        },
        async execute() {
          return { url: docsUrl, title: 'AlertHawk Documentation' };
        },
      },
      { signal },
    );

    return () => {
      controller.abort();
    };
  }, []);

  return null;
}
