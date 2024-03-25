/*eslint-disable*/
import { Product } from "../types";

// Generic fetch function with type safety
export const typedFetch = async <T>(url: string): Promise<T> => {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error('Failed to fetch the Pokémon');
		}
		const data = await response.json();
		return data as T;
	} catch (error) {
		throw error;
	}
};

// Function to fetch a list of products
export async function listProduct(limit: number): Promise<Product[]> {
    try {
        return await typedFetch<Product[]>(`https://fakestoreapi.com/products?limit=${limit}&offset=0`);
    } catch (error) {
        console.error("Error fetching product list:", error);
        throw error;
    }
}

// Function to get of product by it id
export async function getProduct(id: string | number): Promise<Product> {
	try {
		return await typedFetch<Product>(`https://fakestoreapi.com/products/${id}`);
	} catch (error) {
		console.error("Error fetching Pokémon:", error);
		throw error;
	}
}
  