import Image from 'next/image';
import Rating from '@/components/Rating';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const page = () => {
  const product = {
    title: 'Product H',
    src: '/category-food.jpeg',
    description: 'Description Text, blah blah hhhhhhhhhhhhhhhhh Description Text, blah blah hhhhhhhhhhhhhhhhh Description Text, blah blah hhhhhhhhhhhhhhhhh Description Text, blah blah hhhhhhhhhhhhhhhhh Description Text, blah blah hhhhhhhhhhhhhhhhh Description Text, blah blah hhhhhhhhhhhhhhhhh Description Text, blah blah hhhhhhhhhhhhhhhhh Description Text, blah blah hhhhhhhhhhhhhhhhh Description Text, blah blah hhhhhhhhhhhhhhhhh',
    rating: 3.2,
    reviewsCount: 40,
    price: 12.99,
    reviewsArray: [],
  }

  return (
    <div className='container mx-auto flex flex-col md:flex-row justify-between items-center mt-8 mb-4'>
      <div className='w-1/2'>
        <Image
					src={product.src}
					alt={product.title}
					width={720}
					height={600}
          className='object-contain aspect-auto md:pr-4'
				/>
      </div>
      
      <div className='flex flex-col items-start md:ml-6 gap-6 w-3/5'>
        <h1 className='text-darkbrown font-lato text-3xl md:text-4xl lg:text-5xl font-bold italic'>
          {product.title}
        </h1>
        <div>
          Rating: 
          <Rating rating={product.rating}/> 
          <span className='text-sm'>{product.rating}/5.0</span> 
          <span> ({product.reviewsCount} reviews)</span>
        </div>
        <div>
          <h3 className='text-gray-900 text-lg md:text-xl lg:text-2xl'>
            Details:
          </h3>
          <p className='text-gray-700'>
            {product.description}
          </p>
        </div>
        <h3 className='text-lightbrown text-xl md:text-2xl lg:text-3xl'>
          $ {product.price}
        </h3>
        
        {/* <div className='flex justify-between items-center'>
          <h3 className='text-gray-900 text-lg md:text-xl lg:text-2xl'>
            Quantity:
          </h3>
          <div className='border-darkbrown rounded-md border flex items-center justify-center'>
            <button className='border-r border-darkbrown px-2 py-2'>
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <p>4</p>
            <button className='border-l border-darkbrown px-2 py-2'>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div> */}

				<button className='flex items-center px-4 md:px-8 py-1.5 md:py-3 mb-2 leading-loose text-md text-center text-white font-bold bg-lightbrown hover:bg-darkbrown  rounded-full '>
          <FontAwesomeIcon icon={faShoppingCart} color='white'/>
          <p>Add to Cart</p>
        </button>
      </div>  
			
			  
    </div>
  )
}
  
export default page
  