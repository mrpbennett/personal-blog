import {createClient} from 'contentful'

const client = createClient({
  space: process.env.CONTENTFUL_ID,
  accessToken: process.env.CONTENTFUL_TOKEN,
})

export {client}
