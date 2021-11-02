import { LoadFeatures } from '@/domain/usecases'
import { faker } from '@/static-data'

export const makeFeatures = (): LoadFeatures.Model[] => {
  return faker.getFeatures()
}
