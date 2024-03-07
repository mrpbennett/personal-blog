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
              Currently a remote Lead Solutions Engineer obsessed with homelabs
              and DevOps. Coffee-fueled days navigating YAML mazes, automating
              and innovating in a wife approved tech playground.
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
            Solutions Engineer with a deep passion for homelabs, DevOps, and the
            endless quest for automation. My days are fueled by coffee as I
            navigate through the complex mazes of YAML, crafting solutions in a
            wife-approved tech playground. This website, much like my first
            Linux server, has experienced more reboots and redesigns than I care
            to admit. However, it&apos;s time to shift focus from aesthetics to
            substance.
          </p>

          <p>
            The purpose of this site has evolved. It&apos;s no longer about
            showcasing sleek designs but about sharing my journey, discoveries,
            and the valuable lessons learned along the way. Here, I&apos;ll
            document useful snippets of code, unravel the mysteries of
            technology, and offer insights into the tools and practices that
            power my professional and personal projects.
          </p>

          <p>
            Gone are the days of worrying about the site&apos;s appearance. This
            freedom allows me to truly own my slice of the web, where I can
            freely document and discuss anything that sparks my interest—though,
            more often than not, it&apos;s tech-related. Welcome to my digital
            playground, a space where innovation meets documentation, all served
            with a side of caffeine.
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
