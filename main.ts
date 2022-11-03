import { Bson, MongoClient, Database, Redis, redisConnect } from "./deps.ts"

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


  console.log('redisUri', redisUri, 'redisPort', redisPort)

  const rdb:Redis = await redisConnect({
    hostname: redisUri,
    port: redisPort,
    db: 0
  })

  async function close() {

  }

  return {
    mdb,
    collections,
    rdb,
    close,
    getSession,
    setSession,
    rmSession
  }

  async function getSession(devID) {
    const str = await rdb.get(`session:${devID}`)
    try {
      const json = JSON.parse(str)
      return json
    } catch(err) {
      console.log('session parse error', err.message)
      return false
    }
  }

  async function setSession(devID, data) {
    return await rdb.set(`session:${devID}`, JSON.stringify(data))
  }

  async function rmSession(devID) {
    return await rdb.del(devID)
  }

}
