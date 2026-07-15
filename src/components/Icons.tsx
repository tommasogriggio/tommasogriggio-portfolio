/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Fingerprint,
  BookOpen,
  Images,
  RefreshCw,
  Scroll,
  Video,
  Megaphone,
  Hash,
  Palette,
  Camera,
  ArrowRight,
  Mail,
  Download,
  Linkedin,
  Instagram,
  ExternalLink,
  Sparkles,
  LucideProps
} from 'lucide-react';

export const IconMap = {
  Fingerprint,
  BookOpen,
  Images,
  RefreshCw,
  Scroll,
  Video,
  Megaphone,
  Hash,
  Palette,
  Camera,
  ArrowRight,
  Mail,
  Download,
  Linkedin,
  Instagram,
  ExternalLink,
  Sparkles
};

export type IconType = keyof typeof IconMap;

interface DynamicIconProps {
  name: IconType;
  className?: string;
  strokeWidth?: number;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const IconComponent = IconMap[name] || Sparkles;
  return <IconComponent {...props} />;
}
