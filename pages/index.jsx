import Link from 'next/link'
import PropTypes from 'prop-types'
import {useState} from 'react'
import Moment from 'react-moment'
import Layout from '../layouts/layoutMain'
import {client} from '../utils/contentful-client'

export async function getStaticProps() {
  // Fetch all posts with limited fields for static generation
  const posts = await client.getEntries({
    content_type: 'posts',
    select: 'fields.title,fields.date,fields.slug,sys.id', // Only fetch necessary fields
    order: '-fields.date', // Sort by date, newest first
  })

  return {
    props: {
      posts: posts.items,
    },
    revalidate: 10, // Incremental Static Regeneration; adjust as needed
  }
}

Home.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default function Home({posts}) {
  const limit = 10 // Number of posts per page
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(posts.length / limit)

  // Client-side pagination: calculate posts to display on the current page
  const indexOfLastPost = currentPage * limit
  const indexOfFirstPost = indexOfLastPost - limit
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  // Change page handler
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <Layout title="Home">
      <div className="container prose space-y-7">
        {currentPosts.map(post => (
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

      <div className="mt-10 flex items-center justify-center">
        <div className="join">
          {Array.from({length: totalPages}, (_, i) => i + 1).map(number => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`btn join-item ${
                currentPage === number ? 'btn-active' : null
              }`}
              aria-label={number}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </Layout>
  )
}
