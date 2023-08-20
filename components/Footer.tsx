import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
      <footer className="text-gray-600 body-font container mx-auto px-4 sm:px-6 md:px-8 py-10 flex md:items-center md:flex-row flex-col">
        
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link className="flex title-font font-medium" href='/'>             
              <Image
                src="/shop-logo.png"
                alt="logo"
                width={192}
                height={51}
                className='object-contain'
              />				
            </Link>
            <p className="mt-2 text-sm text-gray-500">Elevate your pet's lifestyle with Fur-ever Treasures. Discover a curated collection of premium accessories that blend style and comfort, because every wag and purr deserves the best.</p>
            <br/>
            <p>© 2023 Fur-ever Treasures</p>
          </div>
          <div className="flex justify-between md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className=" px-4">
              <h2 className="title-font font-medium text-darkbrown tracking-widest text-md mb-3">Our Products</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" href='/'>Pet Treats</Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" href='/'>Pet Accessories</Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" href='/'>Pet Grooming</Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" href='/'>Toys and Enrichment</Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" href='/'>Health and Wellness</Link>
                </li>
              </nav>
            </div>
            <div className=" px-4">
              <h2 className="title-font font-medium text-darkbrown tracking-widest text-md mb-3">Help</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" href='/'>Contact Us</Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" href='/'>About Us</Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" href='/'>Privacy Policy</Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" href='/'>Terms & Conditions</Link>
                </li>
              </nav>
            </div>
            <div className=" px-4">
              <h2 className="title-font font-medium text-darkbrown tracking-widest text-md mb-3">Social Media</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" href='/'>
                    <FontAwesomeIcon icon={faFacebook}/>
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" href='/'>
                    <FontAwesomeIcon icon={faTwitter}/>
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" href='/'>
                  <span>
                    <FontAwesomeIcon icon={faInstagram}/>
                    Instagram</span>
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" href='/'>
                    <FontAwesomeIcon icon={faLinkedin}/>
                    Linked In
                  </Link>
                </li>
              </nav>
            </div>
            
          </div>
      </footer>
    )
  }
  
export default Footer
  