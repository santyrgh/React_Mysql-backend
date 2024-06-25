import express from 'express'
import cors from 'cors'

/**
 * TODO: IMPORTAMOS LA CONEXIÓN DE LA BASE DE DADOS * */
import db from './database/db.js'

/**
 * * IMPORTAMOS Enrutador* */
import blogRoutes from './routes/routes.js'

const app  = express()
app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)

try {
    await db.authenticate()
    console.log('conexion exitosas con la bd')
} catch (error) {
    console.log(`conexion  fallida es: ${error}`) 
}

app.get('/', (req, res) => {
res.send('Hola mundo')
})

app.listen(8000, ()=>{
    console.log('server up running  in http://localhost:8000/') 
} )