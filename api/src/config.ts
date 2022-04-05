import dotenv from 'dotenv' // ! importando dotenv
dotenv.config() // ? configurando dotenv, para que se pueda leer las variables de entorno, config() es una función que se ejecuta cuando se importa dotenv para leer las variables de entorno

export default {
  MONGO_DATABASE: process.env.MONGO_DATABASE || 'videosdb',
  MONGO_USER: process.env.MONGO_USER || 'admin',
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'admin',
  MONGO_HOST: process.env.MONGO_HOST || 'localhost',
  PORT: process.env.PORT || 3000,
}
