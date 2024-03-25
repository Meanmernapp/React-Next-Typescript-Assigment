/*eslint-disable*/
import React from 'react';
import Image from 'next/image';
import { Product } from '../types';

interface ProductCardProps {
    product: Product; // Product data for the card
    headerSize: string; // Header size customization
    paragraphSize: string; // Paragraph size customization
    fontGray?: string; // Optional gray font color customization
}

const ProductCard: React.FC<ProductCardProps> = ({
    product,
    headerSize,
    paragraphSize,
    fontGray
}) => {
    return (
        <div className="bg-white border rounded-lg overflow-hidden pb-6 relative">
            {/* Adjust the styles of the Image component */}
            <div className="relative w-full h-0 pb-[50%]">
                <Image
                    src={product.image}
                    alt={`Image ${product.id}`}
                    layout="fill" // Use layout="fill" to fill the parent container
                    objectFit="contain" // Ensure the image covers the entire container
                />
            </div>
            <div className="p-4">
                <h2 className={`text-${headerSize} font-semibold mb-1`}>
                    {product.title && product.title.length > 20 ? `${product.title.slice(0, 20)}...` : product.title}
                </h2>
                <p className={`text-${paragraphSize} text-${fontGray}`}>
                    {product.description && product.description.length > 100 ? `${product.description.slice(0, 100)}...` : product.description}
                </p>
                <div className='flex items-center justify-center absolute bottom-1 right-4 font-semibold'>
                    <button>More Detail</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
