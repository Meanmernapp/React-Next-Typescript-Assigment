/*eslint-disable*/
// Importing necessary modules and types
import Image from 'next/image';
import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

// Props interface for ListA component
interface ListAProps {
    data: Product[]; // Array of product data
    fontFamily: 'Inter' | 'Poppins'; // Font family customization
    headerSize: string; // Header size customization
    paragraphSize: string; // Paragraph size customization
    backgroundColor: string; // Background color customization
    fontColor: string; // Font color customization
    fontGray?: string; // Optional gray font color customization
}

// ListA component
const ListA: React.FC<ListAProps> = ({
    fontFamily,
    headerSize,
    paragraphSize,
    backgroundColor,
    fontColor,
    fontGray,
    data
}) => {
    return (
        <div
            className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-lg"
            style={{
                fontFamily,
                backgroundColor,
                color: fontColor,
            }}
        >

            <h1 className={`text-${headerSize} font-bold mb-4`}>List A</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4">
                {data.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        headerSize={headerSize}
                        paragraphSize={paragraphSize}
                        fontGray={fontGray}
                    />
                ))}
            </div>
        </div>
    );
};

export default ListA;
