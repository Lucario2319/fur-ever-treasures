import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {serviceLinks, helpLinks, socialLinks} from "../constants"

const Footer = () => {
  return (
    <footer className="text-gray-900 mt-4 py-6">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="md:flex md:justify-between items-center md:text-left text-center">
          <div className="mb-8 md:mb-0 flex flex-col gap-4">
            <Link className='flex justify-center items-center md:items-start md:justify-start' href='/'>             
              <Image
                src="/shop-logo.png"
                alt="logo"
                width={192}
                height={51}
                className='object-contain'
              />				
            </Link>
            <p className="text-gray-700 max-w-[50ch] mx-auto md:mx-0">Elevate your pet's lifestyle with Fur-ever Treasures. Discover a curated collection of premium accessories that blend style and comfort, because every wag and purr deserves the best.</p>
            <p className="text-gray-700">© 2023 Fur-ever Treasures. All rights reserved.</p>
          </div>
          
          <div className="flex flex-col mb-8 md:mb-0 md:mx-4">
            <h2 className="text-lg font-semibold mb-2">Services</h2>
            <ul>
							{serviceLinks.map(({name, href})=> (
								<li key={name}>
									<Link href={href} className="text-gray-700 hover:text-lightbrown">{name}</Link>
								</li>
							))}
            </ul>
          </div>
          <div className="flex flex-col mb-8 md:mb-0 md:mx-4">
            <h2 className="text-lg font-semibold mb-2">Help</h2>
            <ul>
						{helpLinks.map(({name, href})=> (
								<li key={name}>
									<Link href={href} className="text-gray-700 hover:text-lightbrown">{name}</Link>
								</li>
							))}
            </ul>
          </div>
          <div className="flex flex-col mb-8 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Socials</h2>
            <ul>
							{socialLinks.map(({name, href, icon})=> (
								<li key={name}>
									<Link href={href} className="text-gray-700 hover:text-lightbrown">
										<FontAwesomeIcon icon={icon} className="w-4 mr-2" />
										{name}
									</Link>
								</li>
							))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
