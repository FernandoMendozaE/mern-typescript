import app from './app'
import './database'

app.listen(app.get('port')) // ? app.get('port') nos permite acceder a una propiedad de nuestra aplicación express, en este caso el puerto de la aplicación

console.log('Server running on port', app.get('port'))
