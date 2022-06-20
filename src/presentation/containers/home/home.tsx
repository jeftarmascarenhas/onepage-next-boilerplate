import { Header } from '@/presentation/components'
import {
  HomeSection,
  SectionAbout,
  SectionContactUs,
  SectionServices,
} from './components'
import { SectionAboutServices } from './styles'

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <HomeSection />
      <SectionAboutServices>
        <SectionAbout />
        <SectionServices />
        <SectionContactUs />
      </SectionAboutServices>
    </>
  )
}
