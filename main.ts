import { Bson, MongoClient, Database, Redis, connect as redisConnect } from "./deps.ts"

export type getDBProps = {
  mongoUri: string
  mongoDb: string
  redisUri: string
  redisPort?: number
  schemas: Record<string, any>
}

export async function getDB({ mongoUri, mongoDb, redisUri, redisPort=6379, schemas }) {
  const client = new MongoClient()
  await client.connect(mongoUri)
  const mdb:Database = client.database(mongoDb)

  const collections = Object
  .keys(schemas)
  .reduce((acc, ck) => {
    acc[ck] = mdb.collection(ck)
    return acc
  }, {})


  const rdb:Redis = await redisConnect({
    hostname: redisUri,
    port: redisPort,
    db: 0
  })

  return {
    mdb,
    collections,
    rdb
  }

}
