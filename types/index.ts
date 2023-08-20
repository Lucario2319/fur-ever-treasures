export type Product = {
  _id: string,
  title: string,
  slug: string,
  image: string,
  price: number,
  categories: string[]
}

export type ProductDetails = {
  _id: string,
  title: string,
  image: string,
  description: string,
  price: number,
  // quantity: number,
}

export type ProductProps = {
  products: Product[]
}
// _id, title, slug, image, price