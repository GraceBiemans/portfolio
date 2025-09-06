import React from 'react';
import Image from 'next/image';
import { ProjectProps } from '@/types/project';

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  previewUrl,
  githubUrl,
  demoUrl,
  isReversed = false,
  isPlaceholder = false,
}) => {
  const containerClasses = `flex flex-col lg:flex-row${isReversed ? '-reverse flex justify-end' : ''} items-center gap-8 lg:gap-12`;

  return (
    <div className={`${containerClasses} ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
      {/* Project Preview */}
      {previewUrl && (
        <div className="w-full lg:w-1/2 aspect-video rounded-xl overflow-hidden shadow-lg ring-1 ring-pink-100 flex items-center justify-center bg-gray-100">
          {isPlaceholder ? (
            <Image
              src={previewUrl}
              alt={`${title} placeholder`}
              width={800}
              height={450}
              className="object-cover w-full h-full"
            />
          ) : (
            <iframe
              src={previewUrl}
              className="w-full h-full"
              title={`${title} Preview`}
              loading="lazy"
            />
          )}
        </div>
      )}
      
      {/* Project Info */}
      <div className="w-full lg:w-1/2 space-y-4">
        <h3 className="flex items-center gap-2 text-2xl font-semibold text-gray-700">
          {title}
          {isPlaceholder && (
            <span className="px-2 py-1 text-xs font-medium text-white bg-gray-400 rounded-full">Coming Soon</span>
          )}
        </h3>
        <p className="text-gray-600">{description}</p>
        <div className="flex gap-4 pt-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 text-white font-medium hover:from-pink-400 hover:to-purple-400 transition-all shadow-sm hover:shadow-md'
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 text-white font-medium hover:from-pink-400 hover:to-purple-400 transition-all shadow-sm hover:shadow-md'
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project; 