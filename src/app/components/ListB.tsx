/*eslint-disable*/
// Importing necessary modules and types
import React from 'react';
import Image from 'next/image';
import { Product } from '../types';

// Props interface for ListB component
interface ListBProps {
    item: Product; // Single product data
    fontFamily: 'Inter' | 'Poppins'; // Font family customization
    headerSize: string; // Header size customization
    paragraphSize: string; // Paragraph size customization
    backgroundColor: string; // Background color customization
    fontColor: string; // Font color customization
}

// ListB component
const ListB: React.FC<ListBProps> = ({
    fontFamily,
    headerSize,
    paragraphSize,
    backgroundColor,
    fontColor,
    item
}) => {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-6"
            style={{
                fontFamily,
                backgroundColor,
                color: fontColor,
            }}
        >
            <h1 className={`text-${headerSize} font-bold mb-4`}>List B</h1>
            <div className="max-w-4xl w-full">
                <h1 className={`text-${headerSize} font-bold mb-4`}>{item.title}</h1>
                <p className={`text-${paragraphSize} mb-4`}>Price: ${item.price}</p>
                <p className={`text-${paragraphSize} mb-4`}>Category: {item.category}</p>
                <p className={`text-${paragraphSize} mb-4`}>Description: {item.description}</p>
                <div className="w-full h-[400px]">
                    <Image
                        src={item.image}
                        alt={`Image ${item.id}`}
                        className="mb-2 w-full h-[400px] rounded-md"
                        width={400}
                        height={400}
                    />
                </div>
                <p className={`text-${paragraphSize} mt-4`}>
                    Rating: {item.rating.rate} ({item.rating.count} votes)
                </p>
            </div>
        </div>
    );
};

export default ListB;
