import React from 'react'
import Social from './social'

export default function Footer() {
  return (
    <footer className="footer mt-10 items-center bg-neutral p-4 text-neutral-content">
      <aside className=" grid-flow-col items-center">
        <p suppressHydrationWarning={true}>
          Paul Bennett {new Date().getFullYear}
        </p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Social />
      </nav>
    </footer>
  )
}
