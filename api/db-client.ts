
import { DynamoDBClient, QueryCommand, QueryCommandInput, QueryCommandOutput } from '@aws-sdk/client-dynamodb';

const TableName = '';
const docClient = new DynamoDBClient({ region: 'us-west-2' });


export const Indexes = { CUSTOMER_SESSIONS: 'customer_sessions' };

const transform = <T>({ items }: { items: QueryCommandOutput['Items']; }) => {
  const map = new Map<string, T>();
  if (!items) {
    console.error('Empty projects supplied');
    return [];
  }
  for (const attributeValues of items) {
  };
  return [];
}

export async function getShopperVentures({ customerId }) {
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dynamodb/index.html
  const params: QueryCommandInput = {
    TableName,
    KeyConditionExpression: '#customerId = :customerId',
    IndexName: Indexes.CUSTOMER_SESSIONS,
    ExpressionAttributeNames: { '#customerId': 'customerId', '#status': 'status' },
    ExpressionAttributeValues: { ':customerId': { S: customerId }, ':metadata': { S: 'metadata' } },
  };
  try {
    const command = new QueryCommand(params);
    const response = await docClient.send(command);
    if (response?.Items) {
      return transform({ items: response.Items });
    }
  } catch (e) {
    console.error('Error fetching projects:', e);
  }
  return [];
}


