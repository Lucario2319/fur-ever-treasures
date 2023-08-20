// import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CategoryCardProps {
  src: string;
  name: string;
  slug: string;
//   key: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ src, name, slug }) => {
  return (
	<Link href={`/product-catalog?categories=${slug}`} className='group relative overflow-hidden rounded-md'>
		<div className='relative w-full pb-[125%] aspect-square'>
			<div className="absolute inset-0">
				<div className="absolute inset-0 z-10 bg-black/60 transition-colors group-hover:bg-black/70"></div>
				<Image
					src={src}
					alt={name}
					// absolute inset-0
					className="object-cover transition-transform group-hover:scale-105 w-full h-full"
					width={512}
					height={512}
	/>
			</div>
		</div>
		<div className="absolute inset-0 z-20 flex items-center justify-center">
			<h3 className='text-3xl text-gray-100 font-medium capitalize md:text-2xl'>
				{name}
			</h3>
		</div>
	</Link>

  );
};

export default CategoryCard;
