import { Footer, Header } from '@/presentation/components'
import { HomeSection, SectionExample } from './components'

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <HomeSection />
      <SectionExample />
      <Footer />
    </>
  )
}
