import { faChevronDown, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const options = ['Food', 'Grooming', 'Health', 'Accessories', 'Toys'];
  const [displayOptions, setDisplayOptions] = useState(options);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (opt:string) => {
    setSelectedOptions([...selectedOptions, opt]);
    
    const updatedOptions = displayOptions.filter((displayOpt) => displayOpt !== opt);
    setDisplayOptions(updatedOptions);
  };

  const handleRemoveOption = (opt:string) => {
    const updatedOptions = selectedOptions.filter((selectedOpt) => selectedOpt !== opt);
    setSelectedOptions(updatedOptions);
    setDisplayOptions([...displayOptions, opt]);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Selected options */}
      <div className="my-2">
        <div className="flex flex-wrap">
          {selectedOptions.map((selectedOption) => (
            <div
              key={selectedOption}
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full m-1 flex items-center"
            >
              <span>{selectedOption}</span>
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

      <div className='group'>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 group-hover:bg-gray-50 group-hover:outline-none group-hover:ring-2 focus:ring-offset-1 group-hover:ring-darkbrown"
          onClick={toggleDropdown}
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          Select Options
          <FontAwesomeIcon icon={faChevronDown}/>
        </button>
        {/* Dropdown menu */}
        <div 
          className='-z-10 pt-1 hidden group-hover:block origin-top-right absolute right-[25%] w-1/2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
          role="menu" aria-orientation="vertical"
        >
          {displayOptions.map((option) => (
            <button
              key={option}
              className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      
    </div>
  );
}

export default Dropdown;