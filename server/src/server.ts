import Fastify from "fastify";
import { appRoutes } from "./routes/appRoutes";
import cors from '@fastify/cors'


async function bootStrap(){
 
    const fastify = Fastify({
        logger: true
    })

    fastify.register(cors, {
        origin: true
    })



    

    fastify.register(appRoutes)


    await fastify.listen({port: 3000})

}

bootStrap().then( ()  => {
    console.log('hi running in http://localhost:3000/')
})
