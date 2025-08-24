import { Suspense } from 'react'
import SessionsSearchPage from './SessionsSearchPage' // see file below

export default function Page() {
  return (
    <Suspense fallback={<div className="p-8">Loading search…</div>}>
      <SessionsSearchPage />
    </Suspense>
  )
}
