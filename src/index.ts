import { serve } from '@hono/node-server'
import { PrismaClient } from '@prisma/client'
import { Hono } from 'hono'

const prismaClient = new PrismaClient();

await prismaClient.country.create({
  data:{
    name:"Ünited States of America",
    countryCode: "USA",
  }
})

const countries = await prismaClient.country.findmany();
const app = new Hono()

app.get('/', (context) => {
  return context.json({message:"Hello Hono!"},200);
})

serve(app,(info)=>{
  console.log('server is running on http://localhost:${info.port}')
});

const select = (parameters: { tableName: string; columns: string[] }): string => {
  const tableName = parameters.tableName;
  const columns = parameters.columns.join(", ");

  const sqlQuery = `SELECT ${columns} FROM ${tableName};`;

  return sqlQuery;
};

const execute = (sqlquery: string):void =>{
  const psqlCommand = `psql -U postgres -d mydb -c ${sqlQuery}`;
};

const sqlQuery = select({ tableName: "users", columns: ["name", "email"] });
execute(sqlQuery);