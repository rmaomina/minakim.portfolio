require('dotenv').config()
const { Client } = require('@notionhq/client')

// Init Client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

const databaseID = process.env.NOTION_DATABASE_ID

const getNotionData = async () => {
  const payload = {
    path: `databases/${databaseID}/query`,
    method: 'POST'
  }  
  const { results } = await notion.request(payload)
  
  const pages = results.map(page => {
    console.log(page.properties.Description.rich_text[0].text.content)
  })
  console.log(pages)
}

getNotionData()