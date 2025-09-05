import { notFound } from 'next/navigation'
import { getMetadataBase } from '../../../lib/metadata-config'
import { sessionService } from '../../../lib/sessionData'
import SessionContent from '../components/SessionContent'
import SessionNavigation from '../components/SessionNavigation'
import { Session } from '../../../lib/types/session'

interface SessionDetailProps {
  params: Promise<{ sessionId: string }>
}

async function getSession(sessionId: string): Promise<Session> {
  try {
    return await sessionService.getSession(sessionId)
  } catch (error) {
    notFound()
  }
}

export async function generateMetadata({ params }: SessionDetailProps) {
  const { sessionId } = await params
  
  try {
    const session = await getSession(sessionId)
    return {
      metadataBase: getMetadataBase(),
      title: `Session ${session.id}: ${session.title}`,
      description: session.description,
    }
  } catch {
    return {
      metadataBase: getMetadataBase(),
      title: 'Session Not Found',
      description: 'The requested session could not be found.'
    }
  }
}

export default async function SessionDetailPage({ params }: SessionDetailProps) {
  const { sessionId } = await params
  const session = await getSession(sessionId)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <a href="/" className="hover:text-blue-400 transition-colors">
              Home
            </a>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <a href="/sessions" className="hover:text-blue-400 transition-colors">
              Sessions
            </a>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-300">Session {session.id}</span>
          </div>
        </nav>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Session Content */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm">
              <SessionContent session={session} />
            </div>
          </div>

          {/* Sidebar - Navigation and Actions */}
          <div className="lg:col-span-1 space-y-6">
            <SessionNavigation currentId={sessionId} />
            
            {/* Session Actions */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-gray-100 mb-4">Session Actions</h3>
              <div className="space-y-3">
                <button className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200 text-sm">
                  Mark as Completed
                </button>
                <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-sm">
                  Save Progress
                </button>
                <button className="w-full px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 text-sm">
                  Print Session
                </button>
              </div>
            </div>

            {/* Session Info */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-gray-100 mb-4">Session Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Duration:</span>
                  <span className="text-gray-200">{session.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Difficulty:</span>
                  <span className={`capitalize ${
                    session.difficulty === 'beginner' ? 'text-green-400' :
                    session.difficulty === 'intermediate' ? 'text-yellow-400' :
                    'text-red-400'
                  }`}>
                    {session.difficulty}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sections:</span>
                  <span className="text-gray-200">{session.content.length}</span>
                </div>
                {session.resources && (
                  <div className="flex justify-between">
                    <span className="text-gray-400">Resources:</span>
                    <span className="text-gray-200">{session.resources.length}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12">
          <SessionNavigation currentId={sessionId} />
        </div>
      </div>
    </div>
  )
}