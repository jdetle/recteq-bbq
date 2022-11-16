import type { APIGatewayProxyEvent, APIGatewayProxyStructuredResultV2 } from 'aws-lambda';
const handler = (event: APIGatewayProxyEvent): APIGatewayProxyStructuredResultV2 => {
  console.log(event.headers);
  return {
    statusCode: 200
  }
}
export default handler;
