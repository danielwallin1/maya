import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'ekwv9ruj',
  dataset: 'production',
  useCdn: false
})