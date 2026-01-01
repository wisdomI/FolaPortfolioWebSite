import React from 'react';
import { 
  BriefcaseIcon, 
  MicrophoneIcon, 
  UsersIcon, 
  ClipboardIcon,
  TargetIcon,
  HandshakeIcon,
  RocketIcon,
  CheckCircleIcon
} from '../Icons';

interface ServicesProps {
  setActiveSection: (section: string) => void;
}

const Services: React.FC<ServicesProps> = ({ setActiveSection }) => {
  return (
    <section className="pt-32 sm:pt-40 pb-16 px-4 sm:px-8 md:px-16 bg-background dark:bg-background-dark min-h-screen w-full">
      <div className="max-w-container mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary dark:text-primary-light mb-4 md:mb-6 text-center animate-fade-in px-4">Skills & Expertise</h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center mb-8 md:mb-12 max-w-3xl mx-auto px-4">
          A snapshot of my technical capabilities and professional strengths in Cloud Engineering and DevOps.
        </p>

        {/* Service Navigation */}
        <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-12 md:mb-16 flex-wrap px-4">
          <a href="#cloud" className="px-4 sm:px-6 py-2 sm:py-3 bg-light-gray dark:bg-light-gray-dark text-gray-700 dark:text-gray-200 rounded-lg hover:bg-primary dark:hover:bg-primary-dark hover:text-white dark:hover:text-primary transition-all duration-300 font-semibold text-sm sm:text-base flex items-center gap-2 border border-gray-200 font-playfair">
            <BriefcaseIcon className="w-5 h-5" /> Cloud
          </a>
          <a href="#devops" className="px-4 sm:px-6 py-2 sm:py-3 bg-light-gray dark:bg-light-gray-dark text-gray-700 dark:text-gray-200 rounded-lg hover:bg-primary dark:hover:bg-primary-dark hover:text-white dark:hover:text-primary transition-all duration-300 font-semibold text-sm sm:text-base flex items-center gap-2 border border-gray-200 font-playfair">
            <RocketIcon className="w-5 h-5" /> DevOps
          </a>
          <a href="#admin" className="px-4 sm:px-6 py-2 sm:py-3 bg-light-gray dark:bg-light-gray-dark text-gray-700 dark:text-gray-200 rounded-lg hover:bg-primary dark:hover:bg-primary-dark hover:text-white dark:hover:text-primary transition-all duration-300 font-semibold text-sm sm:text-base flex items-center gap-2 border border-gray-200 font-playfair">
            <UsersIcon className="w-5 h-5" /> SysAdmin
          </a>
        </div>

        {/* CLOUD SECTION */}
        <div id="cloud" className="mb-16 md:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary dark:text-primary-light mb-4 md:mb-6 text-center px-4 flex items-center justify-center gap-3">
            <BriefcaseIcon className="w-8 h-8 md:w-10 md:h-10 text-secondary" /> Cloud Platforms
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 text-center mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            Extensive experience designing and managing scalable cloud infrastructure.
          </p>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
             <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-primary dark:text-primary-light mb-4">Microsoft Azure</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Expertise in Azure administration, resource management, and cloud security.</p>
              <ul className="list-none mb-8 space-y-2">
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Virtual Machines & Networking</li>
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Azure Active Directory (Entra ID)</li>
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Azure Monitor & Sentinel</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-surface-dark border-2 border-primary dark:border-primary-dark rounded-xl p-8 relative hover:-translate-y-1 transition-all duration-300 shadow-lg">
               <h3 className="text-2xl font-bold text-primary dark:text-primary-light mb-4">Amazon Web Services (AWS)</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Designing resilient and highly available distributed systems.</p>
              <ul className="list-none mb-8 space-y-2">
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> EC2, S3, VPC, IAM</li>
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> AWS Lambda & Serverless</li>
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> CloudWatch & CloudTrail</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-primary dark:text-primary-light mb-4">Google Cloud Platform (GCP)</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Deploying and managing cloud-native applications.</p>
              <ul className="list-none mb-8 space-y-2">
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Compute Engine & GKE</li>
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Cloud Storage & IAM</li>
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Cloud Build & Operations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* DEVOPS SECTION */}
        <div id="devops" className="mb-24">
          <h2 className="text-4xl font-bold text-primary dark:text-primary-light mb-6 text-center flex items-center justify-center gap-3">
            <RocketIcon className="w-10 h-10 text-secondary" /> DevOps & Automation
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Streamlining development workflows and automating infrastructure.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300">
              <h3 className="text-2xl font-bold text-primary dark:text-primary-light mb-4">Containerization & Orchestration</h3>
              <ul className="list-none mb-6 space-y-2">
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Kubernetes (k8s) Management</li>
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Docker & Container Security</li>
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Helm Chart Deployment</li>
              </ul>
            </div>
            
             <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300">
              <h3 className="text-2xl font-bold text-primary dark:text-primary-light mb-4">CI/CD & IaC</h3>
              <ul className="list-none mb-6 space-y-2">
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Infrastructure as Code (Terraform, Flux)</li>
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> GitHub Actions & Azure DevOps</li>
                <li className="text-gray-700 dark:text-gray-300 flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-primary shrink-0" /> Continuous Integration/Deployment</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SYSADMIN SECTION */}
        <div id="admin" className="mb-24">
           <h2 className="text-4xl font-bold text-primary dark:text-primary-light mb-6 text-center flex items-center justify-center gap-3">
            <UsersIcon className="w-10 h-10 text-secondary" /> System Administration
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
             Managing enterprise environments and ensuring operational excellence.
          </p>

          <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-2xl p-12 text-center shadow-lg">
             <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-xl font-bold text-primary dark:text-primary-light mb-4">Microsoft 365</h3>
                  <p className="text-gray-700 dark:text-gray-300">Administration of Exchange, SharePoint, Teams, and comprehensive user management.</p>
                </div>
                <div>
                   <h3 className="text-xl font-bold text-primary dark:text-primary-light mb-4">IT Operations</h3>
                   <p className="text-gray-700 dark:text-gray-300">Hands-on technical support, system troubleshooting, and ensuring high availability.</p>
                </div>
             </div>
          </div>
        </div>
        
          {/* Custom Workshop/Consulting CTA */}
          <div className="bg-gray-900 dark:bg-surface-dark text-white dark:text-primary-dark rounded-2xl p-12 text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Need DevOps Consulting?</h2>
          <p className="text-lg mb-6 opacity-90">I am available for collaborations, training sessions, and consulting projects.</p>
          <button onClick={() => setActiveSection('contact')} className="bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto shadow-md font-playfair">
            Get in Touch
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;
