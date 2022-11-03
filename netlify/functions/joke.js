export const handler = async (event) => {

  const result = await fetch('/random.json?language=en');
  result.json().then(data => {
     return {
        statusCode: 200,
        body: data.text
    }
  })
    
}
