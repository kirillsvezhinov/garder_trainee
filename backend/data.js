
const shopsData = [
  {
    name:'Кофейня Garden Калинка',
    slug:'kalinka',
    addres:'Республики 65'
  },
  {
    name:'Кофейня Garden Океан',
    slug:'ocean',
    addres:'Республики 42'
  },
  {
    name:'Кофейня Garden Советская',
    slug:'social',
    addres:'Совесткая 51к3'
  },
  {
    name:'Кофейня Garden Паруса',
    slug:'parus',
    addres:'Малыгина, 90'
  },
  {
    name:'Кофейня Garden Новин',
    slug:'novin',
    addres:'50 лет Октября 57а'
  },
  {
    name:'Кофейня Garden Эревье',
    slug:'erve',
    addres:'Эревье, 30 к 4'
  },
]
const shopsIems = [
  {
    name:'Эспрессо',
    slug:'expresso',
    size:'60',
    price:'109',
    desc:'Эспрессо - это основа всех кофейных напитков, малого объема, с сбалансированным вкусом и тонкими нотками вишни, лимона и темного шоколада. Превосходно подойдёт для моментального пробуждения.',
  },
  {
    name:'Фильтр-кофе',
    slug:'filter-coffe',
    size:'15',
    price:'129',
    desc:'В Фильтр Американо раскрывается яркий букет кофе. Это классический черный напиток, который зарядит вас бодростью и энергией с утра и на весь день',
  },
  {
    name:'Американо',
    slug:'americano',
    size:'350',
    price:'129',
    desc:'В Фильтр Американо раскрывается яркий букет кофе. Это классический черный напиток, который зарядит вас бодростью и энергией с утра и на весь день',
  },
  {
    name:'Капучино',
    slug:'capuchino',
    size:'350',
    price:'129',
    desc:'Идеально сбалансированный кофейный напиток, для тех кто ценит классику и постоянство. Готовится на двух эспрессо с долей молока 80%',
  },
  {
    name:'Флэт Уайт',
    slug:'flat-white',
    size:'220',
    price:'129',
    desc:'Флэт уайт подходит тем, кто хочет проснуться, или тем, кто в кофейных напитках ценит в первую очередь вкус кофе.',
  },
  
  {
    name:'Латте',
    slug:'latte',
    size:'350',
    price:'129',
    desc:'Нежный, молочный напиток с легким вкусом кофе. Готовится на одном эспрессо. 90% молока. Латте подходит для любого времени суток',
  },
  {
    name:'Матча Латте',
    slug:'matcha-latte',
    size:'291',
    price:'259',
    desc:'Отличное сочетание чая матча, обладающего потрясающим бодрящим эффектом, избавляющим от усталости и придающим сил, с кокосовым молоком. Латте матча превосходен для тех, кто следит за своим здоровьем',
  },
  {
    name:'Какао с зефирками',
    slug:'cocoa',
    size:'255',
    price:'159',
    desc:'Какао имеет яркий шоколадный вкус и сливочную текстуру, готовится на основе натурального горячего шоколада и молока',
  },  
] 



const detailData = {
  'expresso':{
    name:'Эспрессо',
    slug:'expresso',
    size:'60',
    price:'109',
    desc:'Эспрессо - это основа всех кофейных напитков, малого объема, с сбалансированным вкусом и тонкими нотками вишни, лимона и темного шоколада. Превосходно подойдёт для моментального пробуждения.',
  },
  'filter-coffe':{
    name:'Фильтр-кофе',
    slug:'filter-coffe',
    size:'15',
    price:'129',
    desc:'В Фильтр Американо раскрывается яркий букет кофе. Это классический черный напиток, который зарядит вас бодростью и энергией с утра и на весь день',
  },
  'americano':{
    name:'Американо',
    slug:'americano',
    size:'350',
    price:'129',
    desc:'В Фильтр Американо раскрывается яркий букет кофе. Это классический черный напиток, который зарядит вас бодростью и энергией с утра и на весь день',
  },
  'capuchino':{
    name:'Капучино',
    slug:'capuchino',
    size:'350',
    price:'129',
    desc:'Идеально сбалансированный кофейный напиток, для тех кто ценит классику и постоянство. Готовится на двух эспрессо с долей молока 80%',
  },
  'flat-white':{
    name:'Флэт Уайт',
    slug:'flat-white',
    size:'220',
    price:'129',
    desc:'Флэт уайт подходит тем, кто хочет проснуться, или тем, кто в кофейных напитках ценит в первую очередь вкус кофе.',
  },
  'latte': {
    name:'Латте',
    slug:'latte',
    size:'350',
    price:'129',
    desc:'Нежный, молочный напиток с легким вкусом кофе. Готовится на одном эспрессо. 90% молока. Латте подходит для любого времени суток',
  },
  'matcha-latter': {
    name:'Матча Латте',
    slug:'matcha-latte',
    size:'291',
    price:'259',
    desc:'Отличное сочетание чая матча, обладающего потрясающим бодрящим эффектом, избавляющим от усталости и придающим сил, с кокосовым молоком. Латте матча превосходен для тех, кто следит за своим здоровьем',
  },
  'cocoa': {
    name:'Какао с зефирками',
    slug:'kakao',
    size:'255',
    price:'159',
    desc:'Какао имеет яркий шоколадный вкус и сливочную текстуру, готовится на основе натурального горячего шоколада и молока',
  },
}

const slugs = [
  ''
]

module.exports = {
  shopsIems,
  shopsData,
  detailData
}