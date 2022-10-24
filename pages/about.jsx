import React from 'react'
import Tools from '../components/tools'
import Layout from '../layouts/layoutMain'

const social = [
  {
    name: 'Github',
    url: 'https://github.com/mrpbennett',
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/paulandrewbennett/',
  },
  {
    name: 'Email',
    url: 'mailto:paul@pnfb.uk',
  },
]

export default function About() {
  return (
    <Layout title="About">
      <section>
        <h2>Why this blog?</h2>
        <p>
          This website has had more reboots than my first Linux server. The
          design of the site has never stood still till now. I want to now
          concentrate on posting things about what I have learnt. Instead of
          making my site look as pretty as can be. This site will now be a place
          to collect my thoughts on a topic, documenting useful bits of code or
          share what I have learnt.
        </p>

        <p>
          Now I don&apos;t have to worry about what the site looks like. I feel
          I can finally have my corner of the open web, where I have the freedom
          to document anything I feel like! But that does tend to be mostly
          tech.
        </p>
      </section>

      <section>
        <h2>How to get in contact?</h2>

        <p>
          I&apos;m always happy to hear from people who have read this blog. If
          anyone actually does? If any of the posts have helped you out, please
          let me know it could be great to hear, also if you have any feedback
          also, send it through. I have learnt so much from other people,
          it&apos;s great to give that knowledge back to others.
        </p>

        <div>
          <ul className="">
            {social.map(l => (
              <li key={l.name}>
                <a href={l.url} className="link">
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <h2>What applications do you use?</h2>

        <Tools />
      </section>
    </Layout>
  )
}
