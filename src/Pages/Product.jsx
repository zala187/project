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
        <div>
            <h2>Products</h2>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error?.message}</p>}

            <button onClick={handleLogout}>
                Logout
            </button>

            {!loading && products?.length === 0 && (
                <p>No products found</p>
            )}

            {products?.map((p) => (
                <p key={p.id}>{p.title}</p>
            ))}
        </div>
    )
}

export default Products