import express from 'express' // ! importando express
import config from './config'
import morgan from 'morgan' // ! importando morgan
import cors from 'cors' // ! importando cors
import videoRoutes from './routes/videos.routes' // ! importando las rutas de videos

const app = express()

app.set('port', config.PORT) // ? configurando el puerto de la aplicación, set es un método de express para configurar una propiedad de la aplicación en este caso el puerto

app.use(morgan('dev')) // ? usando morgan para mostrar los logs de las peticiones en consola

app.use(cors()) // ? usando cors para permitir que se pueda acceder a la aplicación desde cualquier lugar

app.use(express.json()) // ? usando express.json para que los datos sean enviados en formato json
app.use(express.urlencoded({ extended: false })) // ? usando express.urlencoded({ extended: false }) para que los datos sean enviados en formato urlencoded. Para cuando se envia un petición POST desde un formulario pueda entender los campos que se envian

app.use(videoRoutes) // ? usando las rutas de videos.routes.ts

export default app // ! exportando app
