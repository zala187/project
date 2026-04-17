import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../features/productSlice'
import { logout } from "../features/authSlice"
import { useNavigate } from "react-router-dom"

const Products = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { products, loading, error } = useSelector(
        (state) => state.products
    )

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    const handleLogout = () => {
        dispatch(logout())
        navigate("/")
    }

    return (
        <div className='p-5'>
            <h2 className="text-2xl font-bold mb-4">Products</h2>


            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error?.message}</p>}

           <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded mb-4">
        Logout
    </button>

            {!loading && products?.length === 0 && (
                <p>No products found</p>
            )}

           <div className="grid grid-cols-2 gap-4">
        {products.map((p) => (
            <div key={p.id} className="border p-3 rounded shadow">
                {p.title}
            </div>
        ))}
    </div>
        </div>
    )
}

export default Products