import { FastifyInstance } from "fastify"


export async function routes(fastify: FastifyInstance) {
    fastify.get('/teste', async (request, reply) => {
        return { ok: true }
    })

}