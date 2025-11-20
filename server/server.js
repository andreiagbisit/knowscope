import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'

// INITIALIZE EXPRESS
const app = express()

// CONNECT TO DATABASE
await connectDB()

// MIDDLEWARE
app.use(cors())

// ROUTES
app.get('/', (req, res) => res.send('API working.'))
app.post('/clerk', express.json(), clerkWebhooks)

// PORT
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})
