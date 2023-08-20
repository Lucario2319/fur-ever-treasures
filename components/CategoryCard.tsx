// import React from 'react';
import Image from 'next/image';

interface CategoryCardProps {
  src: string;
  name: string;
  key: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ src, name, key }) => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden" key={key}>
      <div className="relative w-full h-full">
        <div className="absolute inset-0 z-0 transition-all duration-300 transform scale-110 hover:scale-100">
          <div className="absolute inset-0 z-10 bg-black opacity-50 hover:opacity-70 transition-opacity"></div>
          <Image
            src={src}
            alt={name}
            className="object-contain"
            width={512}
            height={512}
          />
        </div>
        <div className="relative z-20 text-white text-center">
          <h1 className="text-4xl font-bold">{name}</h1>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
