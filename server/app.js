const express = require ('express')
const cors = require ('cors')
const mongoose = require ('mongoose')

const department_controller = require('./department_controller')
const product_controller = require('./product_controller');

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

mongoose.connect(
    "mongodb+srv://noemi_cunha:noemi_cunha@cluster0.zpm7m.mongodb.net/Projeto-Integrado?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );

app.use ('/departments', department_controller);
app.use('/products', product_controller);

app.listen(3000, () => {
    console.log("Servidor rodando na porta ", 3000);
});

