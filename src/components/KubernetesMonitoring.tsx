import React from 'react';
import { Server, Cpu, HardDrive, Network } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

import clusterMetricsImg from '../assets/kubernetes-cluster-metrics.png';
import applicationMetricsImg from '../assets/kubernetes-application-metrics.png';
import clustersDiagramImg from '../assets/kubernetes-cluster-diagram.png';

export function KubernetesMonitoring() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="kubernetes-monitoring" className="py-20 bg-gray-900 relative">
      <div className="background-glow opacity-50" />
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-up">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-700/20 mb-6">
              <Server className="w-8 h-8 text-purple-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Kubernetes Infrastructure Monitoring
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deep visibility into your Kubernetes infrastructure with real-time CPU and RAM metrics, cluster health monitoring, and resource utilization tracking across nodes, pods, and namespaces.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="glass-card p-6 rounded-xl hover:border-purple-500/50 transition-all duration-300 fade-up">
              <Cpu className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">Cluster-Level Metrics</h3>
              <p className="text-gray-300 text-sm">
                Real-time CPU and memory monitoring across all nodes in your cluster. Track resource allocation, utilization trends, and capacity planning metrics.
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl hover:border-purple-500/50 transition-all duration-300 fade-up" style={{ transitionDelay: '100ms' }}>
              <HardDrive className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">Pod & Container Metrics</h3>
              <p className="text-gray-300 text-sm">
                Granular CPU and RAM tracking at the pod and container level. Monitor resource consumption per namespace with detailed breakdowns and historical data.
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl hover:border-purple-500/50 transition-all duration-300 fade-up" style={{ transitionDelay: '200ms' }}>
              <Network className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">Multi-Cluster Management</h3>
              <p className="text-gray-300 text-sm">
                Centralized view of all your Kubernetes clusters. Monitor cluster health, resource status, and performance metrics across your entire infrastructure.
              </p>
            </div>
          </div>

          {/* Screenshots Section */}
          <div className="space-y-8">
            {/* Cluster Metrics Dashboard */}
            <div className="fade-up" style={{ transitionDelay: '300ms' }}>
              <div className="glass-card p-1 rounded-xl overflow-hidden">
                <div className="bg-gray-800/50 p-4 border-b border-gray-700/50">
                  <h3 className="text-xl font-semibold text-white mb-1">Cluster Metrics Dashboard</h3>
                  <p className="text-sm text-gray-400">Monitor node CPU and memory usage across your cluster</p>
                </div>
                <img
                  src={clusterMetricsImg}
                  alt="Cluster Metrics Dashboard showing CPU and memory usage across nodes"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Application Metrics Dashboard */}
            <div className="fade-up" style={{ transitionDelay: '400ms' }}>
              <div className="glass-card p-1 rounded-xl overflow-hidden">
                <div className="bg-gray-800/50 p-4 border-b border-gray-700/50">
                  <h3 className="text-xl font-semibold text-white mb-1">Application Metrics Dashboard</h3>
                  <p className="text-sm text-gray-400">Monitor pod and container CPU and memory usage across namespaces</p>
                </div>
                <img
                  src={applicationMetricsImg}
                  alt="Application Metrics Dashboard showing pod and container metrics"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Clusters Diagram */}
            <div className="fade-up" style={{ transitionDelay: '500ms' }}>
              <div className="glass-card p-1 rounded-xl overflow-hidden">
                <div className="bg-gray-800/50 p-4 border-b border-gray-700/50">
                  <h3 className="text-xl font-semibold text-white mb-1">Clusters Diagram</h3>
                  <p className="text-sm text-gray-400">Supervisory view of all clusters and their status</p>
                </div>
                <img
                  src={clustersDiagramImg}
                  alt="Clusters Diagram showing cluster overview and status"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
