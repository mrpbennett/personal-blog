import Head from 'next/head'
import PropTypes from 'prop-types'
import Footer from '../components/footer'
import Header from '../components/header'

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

export default function Layout({children, title = ''}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>{title} &bull; Paul Bennett</title>
        <meta name="description" content="Paul Bennett"></meta>
      </Head>

      <Header />

      <main className="container prose flex-grow font-mono">{children}</main>

      <Footer />
    </div>
  )
}
