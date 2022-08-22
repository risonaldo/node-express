import express from 'express';
import clientesRouter from './routes/clientes';
import mathodOverride from 'method-override';
import db from './db';

const app = express();
const port = parseInt(`${process.env.PORT}`);

app.use(express.urlencoded({extended: true}));
app.use(mathodOverride('_method'))
app.use(clientesRouter);
app.set("view engine","pug")
app.set("views", "./views")

db.sync().then(() => {
    console.log(`Conectado com sucesso!! ${process.env.DB_NAME}`)
}).then(() =>{
    app.listen(port, () =>{
        console.log(`Servidor Rodando na porta ${port}`);
    });
})





