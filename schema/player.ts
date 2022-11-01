import { z, ObjectId } from '../deps.ts'

export const CreatedBySchema = z.object({
  createdBy: z.string().email(),
  createdOn: z.number()
})

export type TCreatedBy = z.infer<typeof CreatedBySchema>

export const PrivateDataSchema = z.object({
  createdBy: CreatedBySchema,
  userType: z.string(),
  token: z.string()
}).optional()

export type TPrivateData = z.infer<typeof PrivateDataSchema>

export const ScriptDataSchema = z.object({ 
  companyName: z.string().optional(),
  sector: z.number().optional(),
  branch: z.string().optional()

}).optional()

export type TScriptData = z.infer<typeof ScriptDataSchema>

export const PlayerSchema = z.object({
  _id: z.instanceof(ObjectId),
  created: z.number(),
  displayName: z.string(),
  userName: z.string().email(),
  password: z.string(),
  privateData: PrivateDataSchema,
  scriptData: ScriptDataSchema
})

export type TPlayer = z.infer<typeof PlayerSchema>
