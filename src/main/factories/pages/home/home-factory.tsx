import { Home } from '@/presentation/containers'
import { makeFeatures } from '@/main/factories/usecases'

export const makeLogin: React.FC = () => {
  return <Home features={makeFeatures()} />
}
