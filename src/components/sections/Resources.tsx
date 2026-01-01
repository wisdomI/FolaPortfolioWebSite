import React from 'react';
import { 
  BookOpenIcon,
  ClipboardIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  StarIcon
} from '../Icons';

interface ResourcesProps {
  setActiveSection: (section: string) => void;
}

const Resources: React.FC<ResourcesProps> = ({ setActiveSection }) => {
  return (
    <section className="pt-32 sm:pt-40 pb-16 px-8 md:px-16 bg-background dark:bg-background-dark min-h-screen w-full">
      <div className="max-w-container mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary dark:text-primary-light mb-4 md:mb-6 text-center animate-fade-in px-4">Certifications & Achievements</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Industry-recognized credentials validating my expertise in cloud computing and DevOps.
        </p>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300 hover:shadow-md">
            <div className="flex justify-center mb-4"><StarIcon className="w-10 h-10 text-secondary" /></div>
            <h3 className="text-xl font-bold text-primary dark:text-primary-light mb-3 text-center">Kubernetes & Cloud Native Associate (KCNA)</h3>
            <div className="text-center mt-4">
              <a href="https://www.credly.com/badges/3631c0de-7b23-42c5-9a27-a1f17e0ccaaa/public_url" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary-light font-semibold hover:underline">
                Verify Credential →
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300 hover:shadow-md">
            <div className="flex justify-center mb-4"><StarIcon className="w-10 h-10 text-secondary" /></div>
            <h3 className="text-xl font-bold text-primary dark:text-primary-light mb-3 text-center">Google Cloud Professional Cloud Architect</h3>
            <div className="text-center mt-4">
              <a href="https://www.credly.com/badges/34f8e53e-4fa9-4fd9-832b-aa713e156792/public_url" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary-light font-semibold hover:underline">
                Verify Credential →
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300 hover:shadow-md">
            <div className="flex justify-center mb-4"><StarIcon className="w-10 h-10 text-secondary" /></div>
            <h3 className="text-xl font-bold text-primary dark:text-primary-light mb-3 text-center">AWS Certified Solutions Architect Associate</h3>
            <div className="text-center mt-4">
               <a href="https://www.credly.com/badges/04d5c972-4f81-448e-a3d7-fa2887e708a0/public_url" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary-light font-semibold hover:underline">
                Verify Credential →
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300 hover:shadow-md">
            <div className="flex justify-center mb-4"><StarIcon className="w-10 h-10 text-secondary" /></div>
            <h3 className="text-xl font-bold text-primary dark:text-primary-light mb-3 text-center">Azure Administrator Associate (AZ-104)</h3>
            <div className="text-center mt-4">
               <a href="https://learn.microsoft.com/api/credentials/share/en-us/Folashadeoroge/51637E73615BBF24?sharingId=FAC5040D72234A31" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary-light font-semibold hover:underline">
                Verify Credential →
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300 hover:shadow-md">
            <div className="flex justify-center mb-4"><StarIcon className="w-10 h-10 text-secondary" /></div>
            <h3 className="text-xl font-bold text-primary dark:text-primary-light mb-3 text-center">Google Cloud Associate Cloud Engineer</h3>
            <div className="text-center mt-4">
               <a href="https://www.credly.com/badges/13dab8aa-293e-4398-94bd-28b750c7b5be/public_url" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary-light font-semibold hover:underline">
                Verify Credential →
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-gray-dark rounded-xl p-8 hover:border-primary dark:hover:border-primary-dark transition-all duration-300 hover:shadow-md">
            <div className="flex justify-center mb-4"><StarIcon className="w-10 h-10 text-secondary" /></div>
            <h3 className="text-xl font-bold text-primary dark:text-primary-light mb-3 text-center">GitHub Foundations</h3>
            <div className="text-center mt-4">
               <a href="https://www.credly.com/badges/ae4c6678-ae18-4c9c-9546-a9e7d3a009dc/public_url" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary-light font-semibold hover:underline">
                Verify Credential →
              </a>
            </div>
          </div>
        </div>

        {/* Trainings & Internships */}
        <div className="bg-light-gray dark:bg-light-gray-dark rounded-2xl p-12 mb-16 border border-gray-200">
          <h2 className="text-3xl font-bold text-primary dark:text-primary-light mb-8 text-center">Trainings & Internships</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
               <CheckCircleIcon className="w-6 h-6 text-secondary shrink-0 mt-1" />
               <div>
                 <h4 className="text-lg font-bold text-gray-900 dark:text-white">Cloud Engineering – ALX Africa</h4>
                 <a href="https://drive.google.com/file/d/1iRIjDHRwf2mPJ6Q6mKCu9ukLuuP-dfnm/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary-light text-sm hover:underline">View Certificate</a>
               </div>
            </div>
            <div className="flex items-start gap-4">
               <CheckCircleIcon className="w-6 h-6 text-secondary shrink-0 mt-1" />
               <div>
                 <h4 className="text-lg font-bold text-gray-900 dark:text-white">DevOps Internship – HNG Tech</h4>
                 <a href="https://drive.google.com/file/d/1b1nr5TmS8nNkLp-IDqu6u34MULpsP8zq/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary-light text-sm hover:underline">View Certificate</a>
               </div>
            </div>
            <div className="flex items-start gap-4">
               <CheckCircleIcon className="w-6 h-6 text-secondary shrink-0 mt-1" />
               <div>
                 <h4 className="text-lg font-bold text-gray-900 dark:text-white">Kubernetes & Cloud Native Essentials – The Linux Foundation</h4>
                 <a href="https://drive.google.com/file/d/1_pHOgIEfRFga2qUiwCKaj0waK8SCbR2G/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary-light text-sm hover:underline">View Certificate</a>
               </div>
            </div>
            <div className="flex items-start gap-4">
               <CheckCircleIcon className="w-6 h-6 text-secondary shrink-0 mt-1" />
               <div>
                 <h4 className="text-lg font-bold text-gray-900 dark:text-white">Azure Cloud Training – Flour Mills of Nigeria x New Horizons</h4>
                 <a href="https://drive.google.com/file/d/1q3fXtVWPyINEeu6Dr7gEYP43TNkjAP3F/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary-light text-sm hover:underline">View Certificate</a>
               </div>
            </div>
            <div className="flex items-start gap-4">
               <CheckCircleIcon className="w-6 h-6 text-secondary shrink-0 mt-1" />
               <div>
                 <h4 className="text-lg font-bold text-gray-900 dark:text-white">Linux Fundamentals Course – LinkedIn</h4>
                 <a href="https://www.linkedin.com/learning/certificates/c1a03fe6cca4b9d491574002f58e64587ca72daa73a9272babe07c5840b20944" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary-light text-sm hover:underline">View Certificate</a>
               </div>
            </div>
          </div>
        </div>

        {/* Work With Me CTA */}
        <div className="bg-white dark:bg-surface-dark border-2 border-primary dark:border-primary-dark rounded-2xl p-12 text-center shadow-lg">
          <h2 className="text-3xl font-bold text-primary dark:text-primary-light mb-4">Ready to Collaborate?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            I'm open to discussing DevOps projects, cloud migrations, and training opportunities.
          </p>
          <button 
            onClick={() => setActiveSection('contact')}
            className="bg-primary dark:bg-primary-dark text-white dark:text-primary border-none px-8 py-4 text-base font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-200 shadow-md font-playfair"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resources;
