import Image from 'next/image';

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getProductDetails } from '@/utils';
// import { ProductDetails } from '@/types';

 
const page = async ({ params }: { params :{ slug: string } }) => {

  const details = await getProductDetails(params.slug);

	return (
    <div key={details._id} className='container mx-auto flex flex-col md:flex-row justify-between items-center mt-8 mb-4'>
      {/* <div className='container w-[75vw] h-[85vh] md:w-[45vw] md:h-[75vh] relative'>
        <Image
					src={details.image}
					alt={details.title}
					width={720}
					height={600}
          className='w-full h-full object-contain absolute inset-0 md:pr-4'
				/>
      </div> */}
      <div className="flex justify-center sm:px-12 p-8 h-screen">
        <Image className="object-scale-down max-h-full drop-shadow-md rounded-md m-auto" 
        src={details.image}
        alt={details.title}
        width={720}
        height={600}
        />
      </div>
      
      <div className='flex flex-col items-start md:ml-6 gap-6 w-3/5'>
        <h1 className='text-darkbrown font-lato text-3xl md:text-4xl lg:text-5xl font-bold italic'>
          {details.title}
        </h1>
        {/* <div>
          Rating: 
          <Rating rating={details.rating}/> 
          <span className='text-sm'>{details.rating}/5.0</span> 
          <span> ({details.reviewsCount} reviews)</span>
        </div> */}
        <div>
          <h3 className='text-gray-900 text-lg md:text-xl lg:text-2xl'>
            Details:
          </h3>
          <p className='text-gray-700'>
            {details.description}
          </p>
        </div>
        <h3 className='text-lightbrown text-xl md:text-2xl lg:text-3xl'>
          $ {details.price}
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

export default page;