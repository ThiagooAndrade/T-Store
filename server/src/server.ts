import Fastify from 'fastify'
import cors from '@fastify/cors'
import { routes } from './routes'

const PORT = 3333;

const app = Fastify({
    logger: true
})

app.get('/', (request, reply) => reply.send({ message: "funcionou" }))

async function start() {
    await app.register(cors)
    await app.register(routes)
    try {
        await app.listen({ port: PORT })
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}

void start().then(() => console.log(`🚀 Servidor rodando em localhost/${PORT}`))
