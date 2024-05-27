const SwaggerJsdoc= require('swagger-jsdoc') 
const swaggerUi = require('swagger-ui-express')


const options ={
    definition:{
        swagger: '2.0',
        info:{
            title:'AAMS API Docs',
            description:'Aamusted Asset Management System APIs documentation',
            contact:{
                name:"phly-tech pro"
            },
            servers:['http://localhost:3000'],
            basePath:'/api/v1/'
        },
       
    },
   apis:['app.js','./routes/*.js']
};

const swaggerSpec = SwaggerJsdoc(options)

const SwaggerDocs =(app)=>{
//swagger page
app.use('/docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec))

//Docs in JSON format
app.get('docs.json',(req,res)=>{
    res.setHeader('Content-Type','application/json');
    res.send(swaggerSpec)
})
}

module.exports = SwaggerDocs