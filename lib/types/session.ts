/**
 * Session type definitions for the llvvaa application
 */

export interface SessionResource {
  type: 'document' | 'code' | 'link' | 'video';
  title: string;
  content?: string;
  url?: string;
}

export interface Session {
  id: string;
  title: string;
  description: string;
  content: string[];
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  topics: string[];
  prerequisites?: string[];
  resources?: SessionResource[];
  completed?: boolean;
}

export interface SessionProgress {
  currentSession: number;
  totalSessions: number;
  completedSessions: number[];
}