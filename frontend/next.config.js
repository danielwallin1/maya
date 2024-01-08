/** @type {import('next').NextConfig} */
const sanityClient = require('@sanity/client');

const client = sanityClient({
  projectId: 'ekwv9ruj',
  dataset: 'production',
  apiVersion: '2023-08-23',
  useCdn: false
})

const nextConfig = {
  exportPathMap: async function (defaultPathMap) {
  
    const path = await client
      // get all the posts and return those with slugs
      .fetch('*[_type == "post"].slug.current')
      .then(data =>
        // use reduce to build an object with routes
        // and select the blog.js file, and send in the
        // correct query paramater.
        data.reduce(
          (acc, slug) => ({
            '/': { page: '/' },
            ...acc,
            [`/shoes`]: { page: '/shoes' },
            [`/clothes`]: { page: '/clothes' },
            [`/product/product/${slug}`]: { page: '/product', query: { slug } },
            [`/product/clothes/${slug}`]: { page: '/product', query: { slug } }
          }),
          {}
        )
      )
      .catch(console.error)
    return path
  },
  images: {
    domains: ['cdn.sanity.io']
  },
  reactStrictMode: true,
}

module.exports = nextConfig
