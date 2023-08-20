import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";

export const CartProduct = () => {
	const cartProducts = [
		{title: 'Product A', src: '/category-food.jpeg', qty: 1, price: 240.00},
		{title: 'Product B', src: '/category-food.jpeg', qty: 1, price: 180.00},
		{title: 'Product C', src: '/category-food.jpeg', qty: 1, price: 120.00}
	];

	return (
	<div className='w-full flex flex-col items-start gap-2'>
		{cartProducts.map(({title, src, qty, price})=>(
			<div key={title+price} className='flex justify-between items-center pb-2 border-b-2 border-gray-500/80 w-full'>
				<div className='flex items-center pl-2 md:pl-4 gap-2'>
					<Image
					src={src}
					alt={title}
					width={50}
					height={60}
					/>
					<div className='flex flex-col gap-0.5 md:gap-1'>
						<h3 className='text-darkgreen font-semibold text-md sm:text-xl md:text-2xl'>
							{title}
						</h3>
						<p className="text-[0.5rem] sm:text-sm md:text-base">
							${price.toFixed(2)} x {qty} = ${(price*qty).toFixed(2)}
						</p>
					</div>
				</div>

				{/* buttons */}
				<div className='flex justify-between items-center pr-2 md:pr-4'>
					<div className='border-darkbrown rounded-md border flex items-center justify-center gap-2 text-xs md:text-base'>
						<button className='border-r border-darkbrown px-2 py-1 text-darkbrown hover:text-white hover:bg-darkbrown'>
						<FontAwesomeIcon icon={faMinus} />
						</button>
						<p>4</p>
						<button className='border-l border-darkbrown px-2 py-1 text-darkbrown hover:text-white hover:bg-darkbrown'>
						<FontAwesomeIcon icon={faPlus} />
						</button>
					</div>
					<div className='px-2 py-1 ml-2 rounded-md border border-red-700 text-red-700 hover:border-white hover:text-white hover:bg-red-700 text-xs md:text-base cursor-pointer'>
						<FontAwesomeIcon icon={faTrash} />
					</div>
				</div>
			</div>
		))}
		

		
		
		
	</div>
	)
}  