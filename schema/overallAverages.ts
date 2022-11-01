import { z, ObjectId } from '../deps.ts'

export const GroupAvgSchema = z.object({
  practise: z.number(),
  culture: z.number(),
  cei: z.number(),
  propToAct: z.number(),
  intent: z.number(),
  es: z.number(),
  capacity: z.number()
})

export type TGroupAvg = z.infer<typeof GroupAvgSchema>
export const QuestionsSchema = z.record(z.string().min(1), z.number())
export type TQuestions = z.infer<typeof QuestionsSchema>

export const BranchSchema = z.object({
  groupAverages: GroupAvgSchema,
  questions: QuestionsSchema,
  submittedCountManager: z.number(),
  submittedCountUser: z.number(),
  totalSubmittedCount: z.number()
})

export type TBranch = z.infer<typeof BranchSchema>

export const AverageSchema = z.object({
  branches: z.record(z.string(), BranchSchema),
  groupAverages: GroupAvgSchema,
  companyName: z.string(),
  questions: QuestionsSchema,
  submittedCountManager: z.number(),
  submittedCountUser: z.number(),
  totalSubmittedCount: z.number(),
  year: z.number()
})

export type TAverage = z.infer<typeof AverageSchema>

export const UserTypeAvergesSchema = z.object({
  branches: BranchSchema,
  groupAverages: GroupAvgSchema,
  questions: QuestionsSchema,
  submittedCountManager: z.number(),
  submittedCountUser: z.number(),
  totalSubmittedCount: z.number(),
  type: z.string(),
  user: z.string(),
  year: z.number()
})

export type TUserTypeAverages = z.infer<typeof UserTypeAvergesSchema>
