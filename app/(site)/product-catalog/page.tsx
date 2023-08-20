import Filter from '@/components/Filter';
import { getProducts } from '@/utils';

const page = async () => {

  let products = await getProducts();
  
  return ( 
    <main className='flex flex-col gap-6 container mx-auto px-4 sm:px-6 md:px-8'>
      {/* headings */}
      <div className='flex flex-col items-start gap-4'>
        <h1 className='text-darkbrown font-lato text-3xl md:text-4xl lg:text-5xl font-bold italic'>
          Product Catalog
        </h1>
        <h3 className='text-gray-900 leading-relaxed text-lg md:text-xl w-4/5'>
          Explore from our amazing variety of pet products
        </h3>
      </div>
        
      
{/* what happened? */}

      <Filter products={products}/>

    </main>
  )
}
  
export default page
  