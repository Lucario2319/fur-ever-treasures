import { Product, ProductDetails } from '@/types';
import { createClient, groq } from 'next-sanity';

export async function getProducts ():Promise<Product[]> {
  const client = createClient({
    projectId: "0cx3x2qb",
    dataset: "production",
    apiVersion: "2023-03-04", 
    useCdn: true
  });

  return client.fetch(
    groq`*[_type == 'product']{
      _id,
      title,
      "slug":slug.current,
      "image":image.asset->url,
      price,
      "categories":categories[]->slug.current
    }`
  )
}

// reviews[]-> (used to get reviews array, -> used for following the reference and get actual data)


export async function getProductDetails (slug:string) :Promise<ProductDetails> {
  const client = createClient({
    projectId: "0cx3x2qb",
    dataset: "production",
    apiVersion: "2023-03-04", 
    useCdn: true
  });

  return client.fetch(
    groq`*[_type == 'product' && slug.current == $slug][0]{
      _id,
      title,
      "image":image.asset->url,
      description,
      price
    }`, {slug}
  )
}

