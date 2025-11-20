import mongoose from 'mongoose'

// CONNECT TO MONGODB DATABASE
const connectDB = async () => {
    mongoose.connection.on('connected', () => console.log('Database connected.'))

    await mongoose.connect(`${process.env.MONGODB_URI}/knowscope`)
}

export default connectDB
