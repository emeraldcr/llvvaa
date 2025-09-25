'use client'

import { useState, useEffect } from 'react'
import { SessionProgress } from '../../../lib/types/session'
import { getSessionProgress } from '../../../lib/sessionData'

interface SessionProgressProps {
  showDetails?: boolean
}

export default function SessionProgressComponent({ showDetails = true }: SessionProgressProps) {
  const [progress, setProgress] = useState<SessionProgress | null>(null)

  useEffect(() => {
    setProgress(getSessionProgress())
  }, [])

  if (!progress) {
    return (
      <div className="animate-pulse bg-white/5 border border-white/10 rounded-xl p-4">
        <div className="h-4 bg-white/10 rounded w-1/3 mb-2"></div>
        <div className="h-2 bg-white/10 rounded"></div>
      </div>
    )
  }

  const progressPercentage = (progress.completedSessions.length / progress.totalSessions) * 100

  return (
    <div className="session-progress bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
      {showDetails && (
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-100">
            Learning Progress
          </h3>
          <div className="text-sm text-gray-300">
            {progress.completedSessions.length} of {progress.totalSessions} completed
          </div>
        </div>
      )}

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
          <span>Overall Progress</span>
          <span>{Math.round(progressPercentage)}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Session Status Grid */}
      {showDetails && (
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: progress.totalSessions }, (_, index) => {
            const sessionNumber = index + 1
            const isCompleted = progress.completedSessions.includes(sessionNumber)
            
            return (
              <div
                key={sessionNumber}
                className={`flex items-center justify-center p-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isCompleted
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-gray-600/20 text-gray-400 border border-gray-600/30'
                }`}
              >
                {isCompleted && (
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
                Session {sessionNumber}
              </div>
            )
          })}
        </div>
      )}

      {/* Motivational Message */}
      {showDetails && (
        <div className="mt-4 pt-4 border-t border-white/10">
          {progress.completedSessions.length === 0 && (
            <div className="text-center text-gray-300">
              <p className="text-sm">Ready to start your learning journey?</p>
              <p className="text-xs text-gray-400 mt-1">Begin with Session 1 to get started</p>
            </div>
          )}
          
          {progress.completedSessions.length > 0 && progress.completedSessions.length < progress.totalSessions && (
            <div className="text-center text-gray-300">
              <p className="text-sm">Great progress! Keep it up!</p>
              <p className="text-xs text-gray-400 mt-1">
                {progress.totalSessions - progress.completedSessions.length} sessions remaining
              </p>
            </div>
          )}
          
          {progress.completedSessions.length === progress.totalSessions && (
            <div className="text-center text-green-400">
              <div className="flex items-center justify-center mb-2">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Congratulations!</span>
              </div>
              <p className="text-sm">You've completed all sessions!</p>
              <p className="text-xs text-gray-400 mt-1">You're ready to apply your knowledge</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}