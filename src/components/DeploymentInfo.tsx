import React from 'react';
import { Github, Container, ArrowRight } from 'lucide-react';

export function DeploymentInfo() {
  return (
    <section className="py-16 bg-gray-800/50">
      
      <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white fade-up">
         Advanced Technology
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-6 rounded-xl">
            
            <div className="flex items-start space-x-4">
              <Container className="w-8 h-8 text-blue-500" />
              
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Kubernetes Ready</h3>
                <p className="text-gray-300 mb-4">Deploy AlertHawk on your Kubernetes cluster with our official Helm chart.</p>
                <a 
                  href="https://artifacthub.io/packages/helm/alerthawk/alerthawk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center"
                >
                  View Helm Chart
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}