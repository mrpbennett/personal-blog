import React, {Suspense} from 'react'
import Social from './social'

export default function Footer() {
  return (
    <footer className="container prose mt-10 flex items-center justify-between border-t-2 py-4 font-mono">
      <div className="text-sm" suppressHydrationWarning={true}>
        <Suspense>Paul Bennett {new Date().getFullYear}</Suspense>
      </div>
      <Social />
    </footer>
  )
}
