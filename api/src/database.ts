import mongoose from 'mongoose' // ! importamos mongoose
import config from './config'

// * Conexión a la base de datos
;(async () => {
  try {
    const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`)
    console.log('DB connected to:', db.connection.name)
  } catch (error) {
    console.log(error)
  }
})()
