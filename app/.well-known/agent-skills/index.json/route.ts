import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { jsonResponse } from '@/lib/agent-discovery/json-response';
import { siteUrl } from '@/lib/site';

const SKILLS = [
  {
    name: 'kubernetes-monitoring',
    type: 'skill-md' as const,
    description:
      'Monitor Kubernetes clusters with real-time CPU/RAM metrics and multi-cluster dashboards',
    path: 'kubernetes-monitoring/SKILL.md',
  },
  {
    name: 'deployment',
    type: 'skill-md' as const,
    description: 'Deploy AlertHawk on Kubernetes using the official Helm chart',
    path: 'deployment/SKILL.md',
  },
];

async function sha256Digest(filePath: string): Promise<string> {
  const content = await readFile(filePath, 'utf8');
  const hash = createHash('sha256').update(content).digest('hex');
  return `sha256:${hash}`;
}

export async function GET() {
  const skillsDir = path.join(
    process.cwd(),
    'public',
    '.well-known',
    'agent-skills',
  );

  const skills = await Promise.all(
    SKILLS.map(async (skill) => {
      const filePath = path.join(skillsDir, skill.path);
      const digest = await sha256Digest(filePath);
      return {
        name: skill.name,
        type: skill.type,
        description: skill.description,
        url: `${siteUrl}/.well-known/agent-skills/${skill.path}`,
        digest,
      };
    }),
  );

  return jsonResponse(
    {
      $schema: 'https://schemas.agentskills.io/discovery/0.2.0/schema.json',
      skills,
    },
    { cacheControl: 'public, max-age=3600' },
  );
}
