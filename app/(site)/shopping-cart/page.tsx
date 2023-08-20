import { CartDetails } from '@/components/CartDetails';
import { CartProduct } from '@/components/CartProduct';

const page = () => {

  return (
    <section className='container mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row gap-4 justify-between items-center mt-8 mb-4'>
      <div className='flex flex-col items-start w-full md:w-1/2 lg:w-3/5'>
        <h1 className='mb-2 text-darkbrown font-lato text-3xl md:text-4xl lg:text-5xl text-center w-full md:text-left font-bold italic'>
          Shopping Cart
        </h1>
        
		    <div className="border-b-2 border-gray-500/80 w-full my-2"/>

        <CartProduct/>
      
      </div>

      <CartDetails/>

    </section>
  )
}

export default page
