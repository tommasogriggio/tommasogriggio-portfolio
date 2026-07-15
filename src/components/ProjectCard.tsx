/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project } from '../types';
import { DynamicIcon } from './Icons';
import { motion } from 'motion/react';
import React from 'react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  key?: React.Key;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      onClick={() => onSelect(project)}
      id={project.id === 'fanzine' ? 'open-kobe-btn' : undefined}
      className="project-card bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
    >
      <div>
        {/* Aesthetic Gradient Top */}
        <div
          className={`h-56 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between relative overflow-hidden`}
        >
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/5 opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>

          <span className="text-[10px] font-mono tracking-widest bg-white/20 border border-white/10 uppercase px-2 py-1 rounded w-max backdrop-blur-sm relative z-10">
            {project.categoryLabel}
          </span>

          <div className="self-end relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
            <DynamicIcon
              name={project.iconName as any}
              className="w-16 h-16 opacity-15"
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* Text Info */}
        <div className="p-6 space-y-3">
          <h3 className="text-lg font-bold text-gray-905 group-hover:text-[#0052FF] transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-gray-500 font-light leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
