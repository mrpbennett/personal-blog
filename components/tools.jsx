import React from 'react'
import {apps, coding, terminal} from '../data/toolData'

export default function ToolsSection() {
  return (
    <>
      <div className="">
        <div>
          <h3 className="">Coding</h3>
          <ul className="p-0">
            {coding.map(c => (
              <li key={c.name} className="flex flex-col text-base">
                <a href={c.url} className="mb-2">
                  {c.name}
                </a>
                <span className="text-sm">{c.description}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="">Terminal</h3>
          <ul className="p-0">
            {terminal.map(t => (
              <li key={t.name} className="flex flex-col text-base">
                <a href={t.url} className="mb-2">
                  {t.name}
                </a>
                <span className="text-sm">{t.description}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="">Apps</h3>
          <ul className="p-0">
            {apps.map(a => (
              <li key={a.name} className="flex flex-col text-base">
                <a href={a.url} className="mb-2">
                  {a.name}
                </a>
                <span className="text-sm">{a.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
