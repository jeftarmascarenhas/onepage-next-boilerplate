import { Home } from '@/presentation/containers'
import { makeFeatures } from '@/main/factories/usecases'

export const makeHome: React.FC = () => {
  return <Home features={makeFeatures()} />
}
