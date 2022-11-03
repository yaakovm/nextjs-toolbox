export const handler = async (event) => {

  const result = await fetch('/random.json?language=en');
  const data = await result.json();
     return {
        statusCode: 200,
        body: JSON.stringify(data.text)
    }

    
}
