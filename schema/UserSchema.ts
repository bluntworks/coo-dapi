import { z, ObjectId } from '../deps.ts'

export const UserSchema = z.object({
  _id: z.instanceof(ObjectId),
  created: z.number(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
})

export type TUser = z.infer<typeof UserSchema>
