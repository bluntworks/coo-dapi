import { z, ObjectId } from '../deps.ts'

export const CompanyDataSchema = z.object({
  _id: z.instanceof(ObjectId),
  seq: z.number().optional(),
  cei: z.number(),
  companyName: z.string(),
  culture: z.number(),
  entSnap: z.number(),
  lastUpdated: z.number(),
  practise: z.number(),
  propToAct: z.number(),
  sector: z.number(),
  year: z.number()
})

export type TCompanyData = z.infer<typeof CompanyDataSchema>
