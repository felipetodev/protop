import * as contentful from 'contentful'
import { normalizeContentfulData } from '../lib/utils'

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  host: process.env.CONTENTFUL_HOST
})

export const getHomeEntries = async () => {
  try {
    const homeEntries = await client.getEntries({
      content_type: 'landingPage',
      limit: 1,
      include: 2
    })

    const [entries] = homeEntries.items

    return (normalizeContentfulData({ fields: entries.fields }) as any).sections
  } catch (e) {
    console.error(e)
    return []
  }
}
