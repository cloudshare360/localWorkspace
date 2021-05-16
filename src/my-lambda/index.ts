import { DynamoDB } from 'aws-sdk';
import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { env } from 'process';
import { v4 } from 'uuid';

const dynamoClient = new DynamoDB.DocumentClient();
export async function main(event: APIGatewayProxyEventV2 ): Promise< APIGatewayProxyResultV2 > {
  
const id = v4();
const put = await dynamoClient.put({
  TableName: env.TABLE_NAME!,
  Item: {
    PK: id
  },
}).promise();
return {
  statusCode: 200,
  body: id,
};
}