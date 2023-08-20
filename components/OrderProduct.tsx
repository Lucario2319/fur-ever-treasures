import Image from 'next/image';

export const OrderProduct = () => {
	const orderProducts = [
		{title: 'Product A', src: '/category-food.jpeg', qty: 1, price: 240.00},
		{title: 'Product B', src: '/category-food.jpeg', qty: 1, price: 180.00},
		{title: 'Product C', src: '/category-food.jpeg', qty: 1, price: 120.00}
	];

	return (
	<div className='w-full flex flex-col items-start gap-2'>
		{orderProducts.map(({title, src, qty, price})=>(
			<div key={title+price} className='flex justify-between items-center pb-2 border-b-2 border-gray-500/80 w-full'>
				<div className='flex items-center justify-between pl-2 md:pl-4 gap-2'>
					<Image
					src={src}
					alt={title}
					width={50}
					height={60}
					/>
					<div className='w-full flex flex-row items-center md:items-start md:flex-col md:gap-1'>
						<h3 className='text-darkgreen font-semibold text-md sm:text-xl md:text-2xl'>
							{title}
						</h3>
						<p className="text-sm md:text-base">
							${price} x {qty} = ${price*qty}
						</p>
					</div>
					
				</div>
			</div>
		))}
	</div>
	)
}  