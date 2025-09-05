import { Session } from '../../../lib/types/session'

interface SessionContentProps {
  session: Session
}

export default function SessionContent({ session }: SessionContentProps) {
  const difficultyColors = {
    beginner: 'bg-green-500/20 text-green-400 border-green-500/30',
    intermediate: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    advanced: 'bg-red-500/20 text-red-400 border-red-500/30'
  }

  return (
    <div className="session-content max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-3xl font-bold text-gray-100">
            Session {session.id}: {session.title}
          </h1>
          <span className={`px-3 py-1 text-sm font-medium rounded-full border ${difficultyColors[session.difficulty]}`}>
            {session.difficulty}
          </span>
        </div>
        
        <p className="text-xl text-gray-200 mb-6 leading-relaxed">
          {session.description}
        </p>
        
        <div className="flex items-center gap-6 text-sm text-gray-300 mb-6">
          <span className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {session.duration}
          </span>
          <span className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {session.content.length} sections
          </span>
        </div>
        
        {/* Topics */}
        <div className="flex flex-wrap gap-2 mb-6">
          {session.topics.map((topic) => (
            <span 
              key={topic}
              className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-md"
            >
              {topic}
            </span>
          ))}
        </div>
        
        {/* Prerequisites */}
        {session.prerequisites && session.prerequisites.length > 0 && (
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-6">
            <h4 className="text-yellow-400 font-medium mb-2">Prerequisites</h4>
            <ul className="text-gray-200 text-sm">
              {session.prerequisites.map((prereq, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  {prereq}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      {/* Content Sections */}
      <div className="space-y-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-100 mb-4">Session Content</h2>
        {session.content.map((section, index) => (
          <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium mr-4">
                {index + 1}
              </div>
              <div className="flex-grow">
                <p className="text-gray-100 leading-relaxed">
                  {section}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Resources */}
      {session.resources && session.resources.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-100 mb-4">Additional Resources</h3>
          <div className="grid gap-4">
            {session.resources.map((resource, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    {resource.type === 'video' && (
                      <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                      </svg>
                    )}
                    {resource.type === 'document' && (
                      <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                    )}
                    {resource.type === 'link' && (
                      <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                      </svg>
                    )}
                    {resource.type === 'code' && (
                      <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-100 mb-1">{resource.title}</h4>
                    {resource.content && (
                      <p className="text-gray-300 text-sm">{resource.content}</p>
                    )}
                    {resource.url && (
                      <a 
                        href={resource.url}
                        className="text-blue-400 hover:text-blue-300 text-sm underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Resource →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}