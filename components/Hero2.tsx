import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (  
    <section className='container mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row justify-between items-center mt-8 mb-4'>
      <div className='flex flex-col items-start gap-6 w-3/5'>
        <h1 className='text-darkbrown font-lato text-3xl md:text-4xl lg:text-5xl font-bold italic'>Unveiling Fur-ever Treasures: Unleash Your Furry Friend's Style and Joy</h1>
				<h3 className='text-gray-900 leading-relaxed text-lg md:text-xl w-4/5'>Explore Accessories That Turn Every Tail Wag into a Priceless Moment</h3>
				<button className='block px-4 md:px-8 py-1.5 md:py-3 mb-2 leading-loose text-md text-center text-white font-bold bg-lightbrown hover:bg-darkbrown  rounded-full'>
          <Link href='/product-catalog'>
            Explore Product
          </Link>
        </button>
      </div>  
			
			<div className='w-1/2'>
        <Image
					src='/hero3.png'
					alt='hero img'
					width={720}
					height={600}
          className='object-contain aspect-auto'
				/>
      </div>  
    </section>
  )
}
export default Hero
