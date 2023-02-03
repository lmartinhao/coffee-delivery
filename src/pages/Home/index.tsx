import { Header } from './components/Header'
import { Products } from './components/Products'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Products />
    </HomeContainer>
  )
}
