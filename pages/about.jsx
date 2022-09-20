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
    url: 'mailto:pbennett.uk@gmail.com',
  },
]

export default function About() {
  return (
    <Layout title="About">
      <section>
        <h2>Why this blog?</h2>
        <p>
          I started this website in 2014 in order to learn more about the web,
          how do you setup, administer and maintain a website? As I read and
          write I hope to use this blogging platform as a place to collect my
          thoughts on a topic, documenting useful bits of code to save repeating
          the furious internet search it took to find the answer and I hope
          enable others to learn too.
        </p>

        <p>
          I've definitely learnt about the web since starting - and have changed
          the tech behind this blog to simplify the setup - that was moving from
          Ghost + Digital Ocean to an SSG (11ty) + Netlify, a blog post will
          come soon on the topic. Now I feel like this is my corner of the open
          web, where I have the freedom to document anything I feel like! But
          that does tend to be mostly tech.
        </p>
      </section>

      <section>
        <h2>How to get in contact?</h2>

        <p>
          I'm always happy to hear from people who have read this blog. Let me
          know what helped and if you have any feedback, send it through. I've
          had two people 'Buy me a coffee' and both times it made my day, not
          because of the money although I do like coffee, but because it gave me
          an incredible sense that I have had a positive enough impact to have
          someone go out of their way to say thank you by gifting me a coffee.
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
