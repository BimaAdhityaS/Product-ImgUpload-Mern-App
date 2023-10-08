import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import AddProduct from './AddProduct.js'

const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        const response = await axios.get('http://localhost:5000/products')
        setProducts(response.data)
    }

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/products/${id}`)
            getProducts()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <div className="note align-middle text-center border-b-2">
                <h1 className="text-4xl font-medium py-3">Product Store</h1>
            </div>
            <div className="flex justify-center">
                <AddProduct />
            </div>
            <div className="flex flex-wrap justify-center mt-2">
                {products.map((product) => (
                    <div className="card w-1/5 bg-gray-300 mx-2" key={product.id}>
                        <figure className="px-10 pt-10">
                            <img src={product.url} alt="Image" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{product.name}</h2>
                            <p className=' text-xs'>{product.description}</p>
                            <div className="card-action">
                                <Link to={`edit/${product.id}`} className="btn btn-sm glass text-blue-600">Edit</Link>
                                <button onClick={() => deleteProduct(product.id)} className="ml-2 btn btn-sm glass text-red-600">Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList