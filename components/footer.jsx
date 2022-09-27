import React, {Suspense, useEffect, useState} from 'react'
import Social from './social'

export default function Footer() {
  const [year, setYear] = useState()

  useEffect(() => {
    const year = new Date().getFullYear
    setYear(year)
  }, [])

  return (
    <footer className="container prose mt-10 flex items-center justify-between border-t-2 py-4 font-mono">
      <div className="text-sm" suppressHydrationWarning={true}>
        <Suspense>Paul Bennett {year}</Suspense>
      </div>
      <Social />
    </footer>
  )
}
