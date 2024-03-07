import React from 'react'
import {apps, coding, terminal} from '../data/toolData'

export default function ToolsSection() {
  return (
    <div className="space-y-4">
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">Coding</div>
        <div className="collapse-content">
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
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">Terminal</div>
        <div className="collapse-content">
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
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">Apps</div>
        <div className="collapse-content">
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
    </div>
  )
}
