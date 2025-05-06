// app/api/fetchGraphQl.js
export async function fetchGraphQL(query) {
    const response = await fetch('https://astralpaints.kwebmakerdigitalagency.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
      cache: 'no-store' // Or use 'force-cache' for static caching
    });
  
    const json = await response.json();
    if (json.errors) {
      console.error('GraphQL errors:', json.errors);
      throw new Error('Failed to fetch API');
    }
    return json.data;
  }
  