import Head from 'next/head'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment'
import Layout from '../../layouts/layoutMain'
import {client} from '../../utils/contentful-client'

export const getStaticPaths = async () => {
  const response = await client.getEntries({content_type: 'posts'})

  const withError = response.items.filter(item => !item?.fields?.slug)
  console.log(JSON.stringify(withError, null, 2))

  const paths = response.items
    .filter(item => Boolean(item?.fields?.slug))
    .map(item => {
      return {
        params: {slug: item.fields.slug || null},
      }
    })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({params}) {
  try {
    const {items} = await client.getEntries({
      content_type: 'posts',
      'fields.slug': params.slug,
    })

    return {props: {post: items[0] || null}, revalidate: 1}
  } catch (e) {
    console.log('Error', e)
    return {props: {post: []}, revalidate: 1}
  }
}

Posts.propTypes = {
  post: PropTypes.object,
}

export default function Posts({post}) {
  const {date, title, content} = post.fields

  return (
    <Layout>
      <Head>
        <title>{title} &bull; Paul Bennett</title>
      </Head>

      <div>
        <div className="">
          <div>
            <Moment format="MMMM D,  YYYY" className="">
              {date}
            </Moment>
            <h2 className="">{title}</h2>

            <p>
              <ReactMarkdown>{content}</ReactMarkdown>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
