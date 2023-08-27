import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'ekwv9ruj',
  dataset: 'production',
  apiVersion: '2023-08-23',
  useCdn: false
})