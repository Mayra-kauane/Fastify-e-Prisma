import 'dotenv/config'
import { z } from 'zod'

//Criar os schemas
//Definir os valores padrões, caso mão seja informado
const envSchema = z.object({
    NODE_ENV: z.enum(['dev', 'test', 'produtcion']).default('dev'),
    PORT: z.coerce.number().default(3333)
})

//validar
const _env = envSchema.safeParse(process.env)

//Verfica se deu erro na validação
if(_env.success === false){
    console.log('Invalid environment variables', _env.error.format())
    throw new Error('Invalid environment variables')
}

export const env = _env.data