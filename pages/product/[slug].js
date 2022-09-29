import React from 'react'
import { client, urlFor } from '../../lib/client'


const ProductDetails = ({ product, products }) => {
  return (
    <div>
        <div className='product-detail-container'>
            <div className='image-contaienr'>
                <img src='' />
            </div>
        </div>
    </div>
  )
}

export const getStaticProps = async ({ params: {slug} }) => {
    const query = `*[_type == "product" && slug.current == '${slug}' ][0]`;
    const productsQuery = '*[_type == "product"]'

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery)
  
    return {
      props: { products, product }
    }
  }

export default ProductDetails