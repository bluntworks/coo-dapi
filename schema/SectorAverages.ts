import { z, ObjectId } from '../deps.ts'

export const SectorAverageSchema = z.object({
  ceiAvg: z.number(),
  cultureAvg: z.number(),
  practiseAvg: z.number(),
  sector: z.number(),
  totalCount: z.number(),
  year: z.number()
})

export type TSectorAverage = z.infer<typeof SectorAverageSchema>
