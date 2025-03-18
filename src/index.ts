import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (context) => {
  return context.json({message:"Hello Hono!"},200);
})

serve(app,(info)=>{
  console.log('server is running on http://localhost:${info.port}')
});
