# AlertHawk Kubernetes Monitoring

Monitor Kubernetes clusters with real-time CPU and RAM metrics, pod-level visibility, and multi-cluster dashboards.

## When to use

Use this skill when an agent needs to help users deploy, configure, or query AlertHawk Kubernetes monitoring capabilities.

## Key resources

- Helm chart: https://artifacthub.io/packages/helm/alerthawk/alerthawk
- Documentation: https://docs.alerthawk.net/
- API catalog: https://alerthawk.net/.well-known/api-catalog

## Capabilities

- Cluster-level node CPU and memory metrics
- Pod and container resource tracking per namespace
- Multi-cluster supervisory views
- Alerting on resource thresholds

## API access

Register an agent via https://alerthawk.net/auth.md and use scopes `metrics.read` and `monitoring.read`.
