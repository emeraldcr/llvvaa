import Link from 'next/link'
import { sessionsData } from '../../../lib/sessionData'

interface SessionNavigationProps {
  currentId: string
}

export default function SessionNavigation({ currentId }: SessionNavigationProps) {
  const currentIndex = parseInt(currentId)
  const totalSessions = sessionsData.length
  const hasNext = currentIndex < totalSessions
  const hasPrevious = currentIndex > 1

  return (
    <nav className="session-navigation bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        {/* Back to Sessions */}
        <Link 
          href="/sessions"
          className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          All Sessions
        </Link>

        {/* Navigation Controls */}
        <div className="flex items-center space-x-4">
          {hasPrevious && (
            <Link 
              href={`/sessions/${currentIndex - 1}`}
              className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous Session
            </Link>
          )}

          {/* Current Session Indicator */}
          <div className="flex items-center space-x-2 text-gray-300">
            <span className="text-sm">Session</span>
            <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded">
              {currentId}
            </span>
            <span className="text-sm">of {totalSessions}</span>
          </div>

          {hasNext && (
            <Link 
              href={`/sessions/${currentIndex + 1}`}
              className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
            >
              Next Session
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      </div>

      {/* Session Progress Bar */}
      <div className="mt-4">
        <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
          <span>Progress</span>
          <span>{currentIndex}/{totalSessions} sessions</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentIndex / totalSessions) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Quick Session Links */}
      <div className="mt-4 pt-4 border-t border-white/10">
        <div className="text-sm text-gray-400 mb-2">Quick Navigation</div>
        <div className="flex space-x-2">
          {sessionsData.map((session) => (
            <Link 
              key={session.id}
              href={`/sessions/${session.id}`}
              className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium transition-colors duration-200 ${
                session.id === currentId
                  ? 'bg-blue-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {session.id}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}