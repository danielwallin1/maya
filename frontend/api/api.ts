import client from '../client';

export default async function loadData(query:string) {
  
  return await client.fetch(query);
}