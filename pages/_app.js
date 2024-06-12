import '../styles/globals.css'
import '../styles/one-dark.css'

import Prism from 'prismjs'
import PropTypes from 'prop-types'
import React, {useEffect} from 'react'

require('prismjs/components/prism-javascript')
require('prismjs/components/prism-css')
require('prismjs/components/prism-jsx')
require('prismjs/components/prism-sql')
require('prismjs/components/prism-yaml')
require('prismjs/components/prism-bash')

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
