import BrowseCategories from "@/components/BrowseCategories";
import FeaturedProducts from "@/components/FeaturedProducts2";
import Hero from "@/components/Hero2";

export default function Home() {
  return (
    <>
    {/* <div className='grid items-center pb-8 pt-6 container gap-12'> */}
      <Hero/>
      <FeaturedProducts/>
      <BrowseCategories/>
    {/* </div> */}
    </>
  )
}
