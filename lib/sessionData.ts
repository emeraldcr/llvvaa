import { Session, SessionProgress } from './types/session'

export const sessionsData: Session[] = [
  {
    id: "1",
    title: "Introduction to Sessions",
    description: "Learn the basics of session management and get started with the fundamentals",
    content: [
      "Welcome to the sessions system - an organized approach to learning and skill development",
      "Understanding session structure and navigation patterns",
      "Key concepts: modular learning, progressive disclosure, and user-centered design",
      "How to navigate between sessions and track your progress",
      "Setting up your learning environment for success"
    ],
    duration: "30 minutes",
    difficulty: "beginner",
    topics: ["basics", "introduction", "navigation"],
    resources: [
      {
        type: 'document',
        title: 'Session Overview Guide',
        content: 'Comprehensive guide to understanding the session system'
      }
    ]
  },
  {
    id: "2", 
    title: "Advanced Session Handling",
    description: "Deep dive into session optimization, state management, and advanced patterns",
    content: [
      "Advanced session management patterns and techniques",
      "State preservation and session persistence strategies", 
      "Performance optimization for session-based applications",
      "Implementing custom session handlers and middleware",
      "Best practices for scalable session architecture",
      "Error handling and recovery mechanisms"
    ],
    duration: "45 minutes",
    difficulty: "intermediate",
    topics: ["optimization", "advanced", "state-management"],
    prerequisites: ["Introduction to Sessions"],
    resources: [
      {
        type: 'code',
        title: 'Session Handler Examples',
        content: 'Code examples for implementing custom session handlers'
      },
      {
        type: 'link',
        title: 'Performance Best Practices',
        url: '#performance-guide'
      }
    ]
  },
  {
    id: "3",
    title: "Session Security & Best Practices", 
    description: "Security considerations, authentication patterns, and implementation guidelines",
    content: [
      "Security fundamentals for session-based systems",
      "Authentication and authorization patterns",
      "Session token management and rotation strategies",
      "Protection against common security vulnerabilities",
      "Implementing secure session storage and transmission",
      "Compliance considerations and audit trails",
      "Real-world security case studies and solutions"
    ],
    duration: "60 minutes",
    difficulty: "advanced", 
    topics: ["security", "best-practices", "authentication"],
    prerequisites: ["Introduction to Sessions", "Advanced Session Handling"],
    resources: [
      {
        type: 'document',
        title: 'Security Checklist',
        content: 'Comprehensive security checklist for session implementations'
      },
      {
        type: 'code',
        title: 'Security Implementation Examples',
        content: 'Code examples demonstrating secure session patterns'
      }
    ]
  }
]

export interface SessionService {
  getSessions(): Promise<Session[]>
  getSession(id: string): Promise<Session>
  updateProgress(sessionId: string, progress: number): Promise<void>
  markCompleted(sessionId: string): Promise<void>
}

export const sessionService: SessionService = {
  async getSessions() {
    return sessionsData
  },
  
  async getSession(id: string) {
    const session = sessionsData.find(s => s.id === id)
    if (!session) {
      throw new Error(`Session ${id} not found`)
    }
    return session
  },
  
  async updateProgress(sessionId: string, progress: number) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(`session-${sessionId}-progress`, progress.toString())
    }
  },
  
  async markCompleted(sessionId: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(`session-${sessionId}-completed`, 'true')
    }
  }
}

export function getSessionProgress(): SessionProgress {
  if (typeof window === 'undefined') {
    return {
      currentSession: 1,
      totalSessions: sessionsData.length,
      completedSessions: []
    }
  }

  const completedSessions: number[] = []
  for (let i = 1; i <= sessionsData.length; i++) {
    if (localStorage.getItem(`session-${i}-completed`) === 'true') {
      completedSessions.push(i)
    }
  }

  return {
    currentSession: 1,
    totalSessions: sessionsData.length,
    completedSessions
  }
}