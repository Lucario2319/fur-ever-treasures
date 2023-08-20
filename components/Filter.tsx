'use client'

import { faChevronDown, faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ProductProps } from '@/types';
import ProductGrid from './ProductGrid';
// import Dropdown from './Dropdown';
// import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation'
import { options, titleDict } from '@/constants';

const Filter = ({products}:ProductProps) => {

  // use this syntax for getting value from dict if not iterating over a keys array
  // const key = options[0] as keyof typeof titleDict;
  
  // use searchParams to get initial value in case set by categories link
  const searchParams = useSearchParams();
  // const router = useRouter();
  const categoryParam = searchParams.get('categories')
  const initialState = categoryParam
    ? { display: options.filter(option => option !== categoryParam), selected: [categoryParam] }
    : { display: options, selected: [] };

  // const minPrice = searchParams.get('minPrice') || ''
  // const maxPrice = searchParams.get('maxPrice') || ''
  
  const [showFilters, setShowFilters] = useState(false);
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(initialState.selected);
  const [displayOptions, setDisplayOptions] = useState<string[]>(initialState.display);
  // router.replace('/product-catalog', undefined, {shallow: true})

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (opt:string) => {
    setSelectedOptions([...selectedOptions, opt]);
    
    // searchParams.push('categories', opt)
    
    const updatedOptions = displayOptions.filter((displayOpt) => displayOpt !== opt);
    setDisplayOptions(updatedOptions);
  };

  const handleRemoveOption = (opt:string) => {
    const updatedOptions = selectedOptions.filter((selectedOpt) => selectedOpt !== opt);
    setSelectedOptions(updatedOptions);
    setDisplayOptions([...displayOptions, opt]);
  };

  const filteredProducts = products.filter((product) => {
    // Filter by price
    if (minPrice !== '' && product.price < parseFloat(minPrice)) {
      return false;
    }
    if (maxPrice !== '' && product.price > parseFloat(maxPrice)) {
      return false;
    }

    // Filter by category
    if (selectedOptions.length > 0) {
      if (!product.categories?.some(category => selectedOptions.includes(category))) {
        return false;
      }
    }
    
    return true;
  });

  // getting category from param in case it's there from categories comp redirect
  // const categoriesParam = searchParams.get('categories') || '';
  // if (categoriesParam !== '') {handleOptionClick(categoriesParam)}
  // const router = useRouter();

  // useEffect(() => {
  //   const qst:string[] = [];

  //   if (minPrice) {
  //     qst.push('minPrice='+minPrice.toString());
  //   }

  //   if (maxPrice) {
  //     qst.push('maxPrice='+maxPrice.toString());
  //   }

  //   router.push(`/product-catalog?${qst.join('&')}`)
  // }, [minPrice, maxPrice, router]);

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(event.target.value);
  };

  const clearFilters = () => {
    setDisplayOptions(options);
    setSelectedOptions([]);
    setMinPrice('');
    setMaxPrice('');
  }

  return (
    <>
      {/* Search and Filter buttons */}
      <div className='flex items-center justify-between'>
        <div className="flex lg:w-2/5 w-3/5">
          <input
              type="search"
              className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-gray-200 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-darkgreen focus:text-neutral-700 focus:outline-none"
              placeholder="Search"
              aria-label="Search" />
        </div>
        <div className='flex gap-2 justify-center items-center'>
          <button className='px-4 md:px-8 py-1 md:py-2 mb-2 leading-loose text-md text-center text-white font-bold bg-lightbrown hover:bg-darkbrown  rounded-full' onClick={() => {setShowFilters(true)}}>Filter</button>
          <button className='px-4 md:px-8 py-1 md:py-2 mb-2 leading-loose text-md text-center text-white font-bold bg-lightbrown hover:bg-darkbrown  rounded-full'>Sort</button>
        </div>  
      </div>
      {/* Search and Filter buttons end */}
      
      {filteredProducts.length > 0 ? 
      <ProductGrid products={filteredProducts} /> : 
      <div className='container mx-auto h-[30vh] text-xl text-center mt-4'>
        No items found in set filters
      </div>}
 
      {/* filter side bar */}
      {showFilters && 
      <div className='relative z-50'>
        {/* dark background */}
        <div className="fixed inset-0 bg-gray-800 opacity-25"></div>

        <aside className="fixed top-0 right-0 bottom-0 flex flex-col w-5/6 max-w-sm py-4 px-6 bg-white border-r overflow-y-auto">
          <>
          {/* headings */}
          <div className="flex items-center mb-8">
            <h2 className="mr-auto font-lato text-darkbrown text-2xl md:text-3xl lg:text-4xl font-semibold ">
              Filters
            </h2>
            <button onClick={() => {setShowFilters(false)}}>
              <FontAwesomeIcon icon={faXmark} size="xl"/>
            </button>
          </div>

          {/* price range */}
          <div className="flex flex-col justify-center mb-2">
            <h3 className='text-lightbrown text-xl md:text-2xl lg:text-3xl'>
              Price Range
            </h3>
            <div className='flex items-center justify-between mt-2'>
              <input placeholder='minimum' type='number'
              value={minPrice}
              onChange={handleMinPriceChange}
              className="relative m-0 block w-2/5 rounded-md border border-solid border-gray-300 bg-gray-200 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-gray-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-darkgreen focus:text-gray-900 focus:outline-none"/>
              <p> - </p>
              <input placeholder='maximum' type='number' 
              value={maxPrice}
              onChange={handleMaxPriceChange}className="relative m-0 block w-2/5 rounded-md border border-solid border-gray-300 bg-gray-200 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-gray-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-darkgreen focus:text-gray-900 focus:outline-none"/>
            </div>
          </div>
          <h3 className='text-lightbrown text-xl md:text-2xl lg:text-3xl'>
            Categories
          </h3>

          {/* Categories start */}
          <div className="relative inline-block text-left">
            
            {/* Dropdown menu start */}
            <div className='group mb-[12rem]'>
              {displayOptions.length > 0 ? <button
                type="button"
                className="inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 mt-2 bg-white text-sm font-medium text-gray-700 group-hover:bg-gray-50 group-hover:outline-none group-hover:border-2  group-hover:border-darkbrown"
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={isOpen}
                >
                Select Options
                <FontAwesomeIcon icon={faChevronDown} className='ml-2'/>
                </button> : 
                <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-400 shadow-sm px-4 py-2 mt-2 bg-white text-sm font-medium text-darkgreen cursor-not-allowed"
                >
                All Options selected
                </button>}
              
              <div 
                className=' hidden group-hover:block origin-top-right absolute right-[25%] w-1/2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
                role="menu" aria-orientation="vertical"
                >
                {displayOptions.map((option) => (
                  <button
                  key={option}
                  className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  onClick={() => handleOptionClick(option)}
                  >
                    {titleDict[option as keyof typeof titleDict]}
                  </button>
                ))}
              </div>
            </div>
            {/* Dropdown menu end */}

            {/* Selected options */}
            <div className="my-2 min-h-[8rem]  py-1">
              <div className="flex flex-wrap">
                {selectedOptions.map((selectedOption) => (
                  <div
                  key={selectedOption}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full m-1 flex items-center"
                  >
                    <span>{titleDict[selectedOption as keyof typeof titleDict]}</span>
                    <button
                      className="ml-1"
                      onClick={() => handleRemoveOption(selectedOption)}
                      >
                      <FontAwesomeIcon icon={faXmark}/>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            {/* Selected options end */}
                      
          </div>
          {/* Categories end */}
          
          </>
          {/* Clear Filters button */}
          <div className="absolute bottom-3">
            <button className="px-4 md:px-8 py-1 md:py-2 mb-2 leading-loose text-md text-center text-white font-bold bg-lightbrown hover:bg-darkbrown  rounded-full" onClick={clearFilters}>
              Clear Filters
            </button>
          </div>

        </aside>
      </div>
      }
      {/* Filter sidebar end */}
    </>
  );
};

export default Filter;
