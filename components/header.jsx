import Link from 'next/link'
import React from 'react'

const links = [
  {
    id: 1,
    name: 'Home',
    url: '/',
  },
  {
    id: 2,
    name: 'About',
    url: '/about',
  },
]

export default function Header() {
  return (
    <div className="container prose mb-10 flex items-center justify-between border-b-2 py-4 font-mono">
      <div className="font-bold">Paul Bennett</div>
      <div>
        <nav className="flex space-x-8">
          {links.map(l => (
            <Link key={l.id} href={l.url} passHref>
              <span className="link">{l.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
