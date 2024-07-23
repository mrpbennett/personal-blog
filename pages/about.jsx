import React from 'react'
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
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">Hello 👋</h1>
            <p className="prose py-6">
              Currently a remote Lead Solutions Engineer obsessed with
              databases, SQL, homelabs, and DevOps. Coffee-fueled days
              navigating YAML mazes, automating, and innovating in a
              wife-approved tech playground.
            </p>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="container prose">
        <section>
          <h2>Why this blog?</h2>
          <p>
            Welcome to my corner of the digital universe. I&apos;m a remote Lead
            Solutions Engineer with a deep passion for databases, SQL, and
            automation. While my Kubernetes cluster is important, it&apos;s the
            world of database administration and engineering that truly
            captivates me. Fueled by coffee, I navigate the complexities of
            YAML, craft database solutions, and build in a wife-approved tech
            playground.
          </p>

          <p>
            This site has evolved from showcasing sleek designs to sharing my
            journey, discoveries, and lessons learned. Here, I&apos;ll document
            code snippets, explore technology, dive into SQL, and share insights
            on database administration and engineering.
          </p>

          <p>
            Gone are the days of worrying about the site&apos;s appearance. Now,
            I focus on content—tech discussions, documentation, and
            innovation—all served with a side of caffeine. Welcome to my digital
            playground.
          </p>
        </section>
        <section>
          <h2>How to get in contact?</h2>

          <p>
            I&apos;m genuinely thrilled to connect with readers of this blog—if
            there are any brave souls out there who&apos;ve ventured through my
            posts. It&apos;s incredibly rewarding to hear if anything I&apos;ve
            shared has made a difference in your work or sparked a bit of
            inspiration. Your feedback, thoughts, or even a simple
            &quot;hello&quot; mean the world to me. The journey of learning is a
            two-way street; I&apos;ve gained so much from the wisdom of others,
            and it&apos;s a privilege to pay that knowledge forward. Don&apos;t
            hesitate to reach out. Let&apos;s keep the cycle of sharing and
            learning going strong.
          </p>

          <div>
            <ul className="">
              {social.map(l => (
                <li key={l.name}>
                  <a
                    href={l.url}
                    className="badge badge-primary badge-outline no-underline hover:badge-secondary hover:badge-outline"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  )
}
