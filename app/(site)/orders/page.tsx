import { OrderList } from "@/components/OrderList"

const page = () => {
    return (
      <>
        <section className='container mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-2 justify-between items-center mt-8 mb-4'>
          <h1 className='mb-2 text-darkbrown font-lato text-3xl md:text-4xl lg:text-5xl text-center w-full md:text-left font-bold italic'>
            Welcome Back, Username
          </h1>
          <h2 className="my-2 text-darkbrown font-lato text-2xl md:text-3xl lg:text-4xl text-center md:text-left w-full font-semibold">
            Order History
          </h2>
          {/* Order list here */}
          <div className="w-full flex flex-row gap-2 md:gap-4 font-bold text-sm md:text-base pb-2 border-b-2 border-gray-500/80">
            <div className="w-1/4 sm:w-1/5 md:w-[12.5%]">Order ID:</div>
            <div className="hidden md:block w-[37.5%]">Address:</div>
            <div className="w-1/4 sm:w-1/5 md:w-[12.5%]">Date:</div>
            <div className="hidden sm:block sm:w-1/5 md:w-[12.5%]">Price:</div>
            <div className="w-1/4 sm:w-1/5 md:w-[12.5%]">Status:</div>
            <div className="w-1/4 sm:w-1/5 md:w-[12.5%]">Action:</div>
          </div>
          <OrderList/>
        </section>
      </>
    )
  }
  
  export default page
  