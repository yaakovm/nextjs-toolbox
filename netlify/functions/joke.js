const fetch = require('node-fetch');

export const handler = async (event) => {

  const result = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
  const data = await result.json();
     return {
        statusCode: 200,
        body: JSON.stringify(data.text)
    }

    
}
