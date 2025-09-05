import Link from 'next/link'
import { Session } from '../../../lib/types/session'

interface SessionCardProps {
  session: Session
}

export default function SessionCard({ session }: SessionCardProps) {
  const difficultyColors = {
    beginner: 'bg-green-500/20 text-green-400 border-green-500/30',
    intermediate: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    advanced: 'bg-red-500/20 text-red-400 border-red-500/30'
  }

  return (
    <Link href={`/sessions/${session.id}`}>
      <div className="session-card bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 cursor-pointer h-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-100">
            Session {session.id}: {session.title}
          </h3>
          <span className={`px-3 py-1 text-xs font-medium rounded-full border ${difficultyColors[session.difficulty]}`}>
            {session.difficulty}
          </span>
        </div>
        
        <p className="text-gray-200 mb-4 leading-relaxed">
          {session.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-300 mb-4">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {session.duration}
          </span>
          <span className="text-gray-400">
            {session.content.length} sections
          </span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {session.topics.slice(0, 3).map((topic) => (
            <span 
              key={topic}
              className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-md"
            >
              {topic}
            </span>
          ))}
          {session.topics.length > 3 && (
            <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-md">
              +{session.topics.length - 3} more
            </span>
          )}
        </div>
        
        {session.prerequisites && session.prerequisites.length > 0 && (
          <div className="text-xs text-gray-400 mb-4">
            <strong>Prerequisites:</strong> {session.prerequisites.join(', ')}
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <span className="text-blue-400 font-medium">
            Start Session →
          </span>
          {session.completed && (
            <div className="flex items-center text-green-400 text-sm">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Completed
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}