import { z, ObjectId } from '../deps.ts'

export const SurveysSubmittedSchema = z.object({
  companyName: z.string(),
  date: z.number(),
  questionList: z.record(z.string(), z.number()),
  type: z.string(),
  user: z.union([ z.string(), z.instanceof(ObjectId)]),
  year: z.number()
})

export type TSurveysSubmitted = z.infer<typeof SurveysSubmittedSchema>
