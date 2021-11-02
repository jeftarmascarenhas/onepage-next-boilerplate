import { LoadFeatures } from '@/domain/usecases'
import { Footer, Header } from '@/presentation/components'
import { HomeSection, SectionExample } from './components'

type Props = {
  features: LoadFeatures.Model[]
}

export const Home: React.FC<Props> = ({ features }: Props) => {
  return (
    <>
      <Header />
      <HomeSection features={features} />
      <SectionExample />
      <Footer />
    </>
  )
}
