
export const OrderDetails = () => {
	const orderSummary = [
    {title: 'Date', data: '04/08/23'},
		{title: 'Status', data: 'Delivered'},
		{title: 'Total', data: '$240.00'},
	];
	const address = 'some random street address long enough to span few lines xd'

	return (
	<aside className='w-full md:w-3/5 lg:w-2/5 px-4 sm:px-6 md:px-8 pb-2 flex flex-col items-start gap-1 bg-gray-300 border-2 border-gray-500/70'>
		<h2 className="my-2 text-darkbrown font-lato text-2xl md:text-3xl lg:text-4xl text-center md:text-left w-full font-semibold">
			Subtotal (2) Items
		</h2>
		
		<div className="border border-gray-500/80 w-full mb-2"/>

		{orderSummary.map(({title, data}) => (
		<div key={title+data} className="flex justify-between items-center gap-2 w-full text-sm md:text-base">
			<p>{title}</p>
			<p>{data}</p>  
		</div>
		))}
		
		<div className="border border-gray-500/80 w-full my-2"/>

		<div>
			<span className="font-semibold">Address: </span>{address}
		</div>
		
	</aside>
	)
}  