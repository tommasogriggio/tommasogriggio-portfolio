/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'brand' | 'social' | 'editorial';
  categoryLabel: string;
  gradient: string;
  iconName: string;
  modalTitle: string;
  modalSubtitle: string;
  modalIcon: string;
  modalDesc: string;
  image?: string;
  images?: string[];
  details?: {
    how: string;
    tools: string[];
    goal: string;
  };
}

export interface Interest {
  id: string;
  title: string;
  description: string;
  iconName: 'Megaphone' | 'Hash' | 'Palette' | 'Camera';
}
