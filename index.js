//import jsonserver---we use the method require---we assign to a variable

const jsonserver=require('json-server')

//to create server

const server=jsonserver.create()

//set router

const router=jsonserver.router("db.json")

//create middle ware----for data to be given from frontend to backend and viseversa------it acts as a parser----the data from json server is parsed into javascript format ---that's done by middle ware

const middleware=jsonserver.defaults()

//create port----use capital letter for variable----

const PORT=process.env.PORT ||4000

//use server
server.use(middleware)

server.use(router)

//running server

server.listen(PORT,()=>{
    console.log('media player server started at port:'+ PORT);
})

//in command promt use node index.js[which we have already given in start]

//server is created now json data should be created
//json data= key value pair but the key will be a string----the middleware is used to convert the json data to javascript



