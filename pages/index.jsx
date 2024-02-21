import Link from 'next/link'
import PropTypes from 'prop-types'
import {useEffect, useState} from 'react'
import Moment from 'react-moment'
import Layout from '../layouts/layoutMain'
import {client} from '../utils/contentful-client'

export async function getStaticProps() {
  const posts = await client.getEntries({content_type: 'posts'})

  return {
    props: {
      posts: posts.items,
    },
  }
}

Home.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default function Home({posts}) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return (
    <Layout title="Home">
      <div className="space-y-7">
        {posts.map(post => (
          <div key={post.sys.id} className="not-prose">
            <Link
              href={`/posts/${encodeURIComponent(post.fields.slug)}`}
              passHref
            >
              <div>
                <h3 className="link text-lg font-bold">{post.fields.title}</h3>
              </div>
            </Link>

            <div>
              <span className="text-sm">Published on </span>
              <Moment format="MMM D, YYYY" className="text-sm">
                {post.fields.date}
              </Moment>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
