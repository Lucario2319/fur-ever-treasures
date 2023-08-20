
export const CartDetails = () => {
	const orderSummary = [
		{title: 'Subtotal', amount: '$240.00'},
		{title: 'Shipping', amount: 'Calculated at Checkout'},
		{title: 'Taxes', amount: 'Calculated at Checkout'}

	];

	return (
	<aside className='w-full md:w-1/2 lg:w-1/3 px-4 sm:px-6 md:px-8 flex flex-col items-start gap-1 bg-gray-300 border-2 border-gray-500/70'>
		<h2 className="my-2 text-darkbrown font-lato text-2xl md:text-3xl lg:text-4xl text-center md:text-left w-full font-semibold">
			Subtotal (2) Items
		</h2>
		
		<div className="border border-gray-500/80 w-full mb-2"/>

		{orderSummary.map(({title, amount}) => (
		<div key={title+amount} className="flex justify-between items-center gap-2 w-full text-sm md:text-base">
			<p>{title}</p>
			<p>{amount}</p>  
		</div>
		))}
		
		<div className="border border-gray-500/80 w-full mt-2"/>

		<div className="font-semibold text-md md:text-lg flex justify-between items-center w-full my-2">
			<p>
				Total  
			</p>
			<p>
				$240.00  
			</p>  
		</div>

		<div className="border border-gray-500/80 w-full"/>

		<button className='px-6 mx-auto my-4 md:px-4 py-1 md:py-2 sm:text-md sm:font-semibold text-center text-white font-light font-lato text-md md:text-lg bg-lightbrown hover:bg-darkbrown rounded-full'>
			Proceed to Checkout
		</button>
	</aside>
	)
}  