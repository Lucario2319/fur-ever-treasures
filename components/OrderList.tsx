import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";

export const OrderList = () => {
	const ordersData = [
		{
			orderId: '12345',
			address: 'Lorem 123 ipsum xd yy bro no no',
			date: '2023-08-15',
			price: 50.0,
			status: 'In Process',
		},
		{
			orderId: '98674',
			address: 'This component will display a list of all orders placed by a user, mainly their orderID, address, date, price and status.',
			date: '2023-08-15',
			price: 2350.0,
			status: 'Delivered',
		},
		// Add more orders here
	];
			
	return (
		<div className="w-full">
			{ordersData.map(({orderId, address, date, price, status}) => (
				<div key={orderId} className="flex flex-row items-center gap-2 md:gap-4 mb-2 pb-2 border-b-2 border-gray-500/80 text-xs lg:text-base">
					<p className="w-1/4 sm:w-1/5 md:w-[12.5%]">{orderId}</p>
					<p className="hidden md:block w-[37.5%] truncate">{address}</p>
					<p className="w-1/4 sm:w-1/5 md:w-[12.5%]">{date}</p>
					<p className="hidden sm:block sm:w-1/5 md:w-[12.5%]">${price.toFixed(2)}</p>
					<p className="w-1/4 sm:w-1/5 md:w-[12.5%]">{status}</p>
					<div className="w-1/4 sm:w-1/5 md:w-[12.5%]">
						<button className="px-2 sm:px-4 py-1 sm:py-2 text-xs md:text-md sm:font-semibold md:font-semibold text-center text-white font-light font-lato bg-lightbrown hover:bg-darkbrown rounded-full">
							<Link href={`/orders/${orderId}`}>
								View
								<FontAwesomeIcon icon={faArrowRight} className="ml-2 hidden lg:inline"/>
							</Link>
						</button>
					</div>
				</div>
			))}
			
{/* 
This component will display a list of all orders placed by a user, mainly their orderID, address, date, price and status. 
For better UI, I've decided that I'll first display the labels of these properties in a single horizontal line. All orders will then be displayed in the proceeding vertical lines, each vertical line showing a single order only, where properties of the order are spaced in a specific manner such that they align perfectly with the corresponding properties of other orders vertically.


*/}
		</div>
	)
}
