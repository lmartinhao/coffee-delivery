import Expresso from '../../../../assets/coffees/Type=Expresso.svg'
import Americano from '../../../../assets/coffees/Type=Americano.svg'
import ExpressoCremoso from '../../../../assets/coffees/Type=Expresso Cremoso.svg'
import ExpressoGelado from '../../../../assets/coffees/Type=Café Gelado.svg'
import CafeComLeite from '../../../../assets/coffees/Type=Café com Leite.svg'
import Latte from '../../../../assets/coffees/Type=Latte.svg'
import Capuccino from '../../../../assets/coffees/Type=Capuccino.svg'
import Macchiato from '../../../../assets/coffees/Type=Macchiato.svg'
import Mochaccino from '../../../../assets/coffees/Type=Mochaccino.svg'
import ChocolateQuente from '../../../../assets/coffees/Type=Chocolate Quente.svg'
import Cubano from '../../../../assets/coffees/Type=Cubano.svg'
import Havaiano from '../../../../assets/coffees/Type=Havaiano.svg'
import Arabe from '../../../../assets/coffees/Type=Árabe.svg'
import Irlandes from '../../../../assets/coffees/Type=Irlandês.svg'

export const coffeeList = [
  {
    id: 1,
    title: 'Expresso Tradicional',
    tags: ['Tradicional'],
    content: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    svg: Expresso,
  },
  {
    id: 2,
    title: 'Expresso Americano',
    tags: ['Tradicional'],
    content: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    svg: Americano,
  },
  {
    id: 3,
    title: 'Expresso Cremoso',
    tags: ['Tradicional'],
    content: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    svg: ExpressoCremoso,
  },
  {
    id: 4,
    title: 'Expresso Gelado',
    tags: ['Tradicional', 'Gelado'],
    content: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    svg: ExpressoGelado,
  },
  {
    id: 5,
    title: 'Café com leite',
    tags: ['Tradicional', 'Com leite'],
    content: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    svg: CafeComLeite,
  },
  {
    id: 6,
    title: 'Latte',
    tags: ['Tradicional', 'Com leite'],
    content: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    svg: Latte,
  },
  {
    id: 7,
    title: 'Capuccino',
    tags: ['Tradicional', 'Com leite'],
    content: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    svg: Capuccino,
  },
  {
    id: 8,
    title: 'Macchiato',
    tags: ['Tradicional', 'Com leite'],
    content: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    svg: Macchiato,
  },
  {
    id: 9,
    title: 'Mocaccino',
    tags: ['Tradicional', 'Com leite'],
    content: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    svg: Mochaccino,
  },
  {
    id: 10,
    title: 'Chocolate Quente',
    tags: ['Especial', 'Com leite'],
    content: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    svg: ChocolateQuente,
  },
  {
    id: 11,
    title: 'Cubano',
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    content: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    svg: Cubano,
  },
  {
    id: 12,
    title: 'Havaiano',
    tags: ['Especial'],
    content: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    svg: Havaiano,
  },
  {
    id: 13,
    title: 'Árabe',
    tags: ['Especial'],
    content: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    svg: Arabe,
  },
  {
    id: 14,
    title: 'Irlandês',
    tags: ['Especial', 'Alcoólico'],
    content: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    svg: Irlandes,
  },
]
