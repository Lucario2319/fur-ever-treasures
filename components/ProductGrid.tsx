
import ProductCard from '@/components/ProductCard';
import { ProductProps } from '@/types';
// import { getProducts } from '@/utils';
// import { useSearchParams } from 'next/navigation'

const ProductGrid = ({products}:ProductProps) => {

  // const products = await getProducts();

  // const searchParams = useSearchParams()
  // const minPrice = searchParams.get('minPrice') || ''
  // const maxPrice = searchParams.get('maxPrice') || ''

  // const filteredProducts = products.filter((product) => {
  //   if (minPrice !== '' && product.price < parseFloat(minPrice)) {
  //     return false;
  //   }
  
  //   if (maxPrice !== '' && product.price > parseFloat(maxPrice)) {
  //     return false;
  //   }
  
  //   return true;
  // });

  return (
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 w-4/5 sm:w-full md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-between'>
        {products.map(
          ({_id, title, slug, image, price}) => 
        <ProductCard title={title} image={image} slug={slug} price={price} key={_id}/>
        )}
      </div>
  )
}

export default ProductGrid;