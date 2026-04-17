import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { loginUser } from '../features/authSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

      const { loading, error } = useSelector((state) => state.auth)


    const handleLogin = async (e) => {
        e.preventDefault()
          if (!username || !password) {
            alert("Please fill all fields")
            return
        }

        const res = await dispatch(loginUser({ username, password}))

        if (res.meta.requestStatus === "fulfilled") {
            navigate('/products')
        }
    }
    

    return (
        <form onSubmit={handleLogin}>
            <input
                type="text"
                  value={username}
                placeholder="username (e.g. sophiab)"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                value={password}
              placeholder="password (e.g. sophiabpass)"
                onChange={(e) => setPassword(e.target.value)}
            />
             <button type="submit">
                {loading ? "Logging in..." : "Login"}
            </button>

           {error && <p style={{ color: 'red' }}>
    {error?.message || "Login failed"}
</p>}
        </form>
    )
}

export default Login