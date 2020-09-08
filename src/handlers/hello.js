async function hello(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from hello.handler' }),
  };
}

export const handler = hello;
