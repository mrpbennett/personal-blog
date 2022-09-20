import '../styles/globals.css'
import '../styles/one-dark.css'

import Prism from 'prismjs'
import PropTypes from 'prop-types'
import React, {useEffect} from 'react'

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}

function MyApp({Component, pageProps}) {
  useEffect(() => {
    Prism.highlightAll()
  })

  return <Component {...pageProps} />
}

export default MyApp
