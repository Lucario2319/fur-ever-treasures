import Image from 'next/image';
import Link from 'next/link';
// import Rating from '@/components/Rating';

interface ProductProps {
  title: string;
  image: string;
  slug: string;
  price: number;
  // key: string;
}

const ProductCard = ({ title, image, slug, price }:ProductProps) => {
  return (
    <Link href={`/product-catalog/${slug}`} className='w-full'>
    <div className='w-full flex flex-col justify-center gap-4 py-2 px-4 md:px-2 border border-darkgreen box-border rounded-md'>
      {/* <div className='w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 relative' style={{ paddingBottom: '56.25%' }}>
        <Image 
          src={image}
          alt={title}
          width={256}
          height={256}
          className='w-full h-full object-contain absolute inset-0'
        />
      </div> */}
      <div className="flex justify-center sm:px-12 p-8 h-[40vh]">
        <Image className="object-scale-down max-h-full drop-shadow-md rounded-md m-auto" 
        src={image} 
        alt={title} 
        width={256}
        height={256}
        />
      </div>
      <h3 className='font-semibold text-darkgreen text-lg md:text-xl lg:text-2xl max-w-[30ch] sm:max-w-[25ch] md:max-w-[20ch] truncate'>
        {title}
      </h3>
      {/* <div>
        Rating: 
        <Rating rating={rating}/> 
        <span className='text-sm'>{rating}/5.0</span> 
        <span> ({reviewsCount})</span>
      </div> */}
      <div className='flex justify-between items-center'>
        <div className='font-bold font-lato text-xl'>
          $ {price}
        </div>
        <button className='px-2 md:px-4 py-1 md:py-1 sm:text-md sm:font-semibold text-center text-white font-light font-lato text-sm bg-lightbrown hover:bg-darkbrown rounded-full'>
          Add to Cart
        </button>
      </div>
    </div>
    </Link>
  )
}

export default ProductCard
