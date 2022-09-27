import Link from 'next/link'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
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
  return (
    <Layout title="Home">
      {posts.map(post => (
        <div key={post.sys.id} className="">
          <Link
            href={`/posts/${encodeURIComponent(post.fields.slug)}`}
            passHref
          >
            <div>
              <h3 className="link not-prose">{post.fields.title}</h3>
            </div>
          </Link>
          <div className="mb-4">
            <span className="text-sm">Published on </span>
            <Moment format="MMM D, YYYY" className="text-sm">
              {post.fields.date}
            </Moment>
          </div>

          <div className="trunc-md">
            <ReactMarkdown>{post.fields.content}</ReactMarkdown>
          </div>
        </div>
      ))}
    </Layout>
  )
}
