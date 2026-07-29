import { siteUrl } from '@/lib/site';
import { apiBaseUrl, docsUrl } from './config';

export function openApiDocument() {
  return {
    openapi: '3.1.0',
    info: {
      title: 'AlertHawk API',
      version: '1.0.0',
      description:
        'AlertHawk monitoring API for uptime checks, Kubernetes metrics, alerts, and FinOps insights.',
      contact: {
        name: 'AlertHawk',
        url: siteUrl,
      },
    },
    servers: [{ url: apiBaseUrl }],
    paths: {
      '/health': {
        get: {
          summary: 'Health check',
          operationId: 'getHealth',
          responses: {
            '200': {
              description: 'Service is healthy',
            },
          },
        },
      },
      '/monitoring/status': {
        get: {
          summary: 'Get monitoring status overview',
          operationId: 'getMonitoringStatus',
          'x-payment-info': {
            intent: 'charge',
            method: 'card',
            amount: '0.01',
            currency: 'USD',
            description: 'Per-request monitoring status query',
          },
          responses: {
            '200': {
              description: 'Monitoring status',
            },
            '402': {
              description: 'Payment required',
            },
          },
        },
      },
    },
    'x-service-info': {
      name: 'AlertHawk',
      categories: ['monitoring', 'infrastructure', 'kubernetes'],
      documentation: docsUrl,
    },
  };
}

export function x402PaymentRequired(resourceUrl: string) {
  return {
    x402Version: 2,
    error: 'Payment required',
    resource: {
      url: resourceUrl,
      description: 'Premium AlertHawk API access',
      mimeType: 'application/json',
    },
    accepts: [
      {
        scheme: 'exact',
        network: 'eip155:8453',
        amount: '1000',
        asset: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
        payTo: '0x0000000000000000000000000000000000000000',
        maxTimeoutSeconds: 3600,
      },
    ],
  };
}
