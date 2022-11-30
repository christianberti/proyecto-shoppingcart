// TODO implementar pagina de login con usuario y contraseña

// de ser posible, implementar sistema de autenticación con context

// ademas, se valora el uso de custom hooks para el manejo de formularios

import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import './Login.css'

const Login = () => {

    const navigate = useNavigate()

    const { login } = useContext(AuthContext)

    const [form, setForm] = useState({
        nombre: '',
        password: '',
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form, 
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const { nombre } = form; 

        login(nombre)

        navigate('/app', {
            replace: true
        })
    }

  return (
    <div className='form_container'>
        <form onSubmit={handleSubmit} className='login_container'>
            <input 
                type='text' 
                name='nombre' 
                value={form.nombre} 
                onChange={handleChange}
                placeholder='Usuario'/>
            <input 
                type='password' name='password' 
                value={form.password} onChange={handleChange}
                placeholder='Contraseña'/>
            <button 
                type='submit'
            > Iniciar Sesion </button>
        </form>
    </div>
  )
}

export default Login