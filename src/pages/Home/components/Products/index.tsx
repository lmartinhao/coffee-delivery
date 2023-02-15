import { CoffeeCard } from './CoffeeCard'
import { coffeeList } from './CoffeList'
import { ProductsArea, ProductsContainer } from './styles'

export function Products() {
  return (
    <ProductsContainer>
      <h2>Nossos cafés</h2>

      <ProductsArea>
        {coffeeList.map((coffee) => {
          return (
            <CoffeeCard
              key={coffee.id}
              id={coffee.id}
              svg={coffee.svg}
              title={coffee.title}
              tags={coffee.tags}
              content={coffee.content}
              price={coffee.price}
            />
          )
        })}
      </ProductsArea>
    </ProductsContainer>
  )
}
