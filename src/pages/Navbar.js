import React from 'react'
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Logout } from '../action/user'
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
    const token = useSelector((state) => state?.user?.token)
    const dispatch = useDispatch()
    return (
        <div className='navbar'>

            <NavLink className='link' to='/'><h5>EvenTY</h5></NavLink>
            <div>
                {
                    token ?
                        <div>
                            <NavLink className='link' to='/cart'><FaShoppingCart /></NavLink>
                            <Button variant='danger' onClick={() => dispatch(Logout())} >Logout</Button>
                        </div> :
                        <div>
                            <NavLink className='link' to='/login'>Login</NavLink>
                            <NavLink className='link' to='/signup'>Signup</NavLink>
                        </div>
                }

            </div>

        </div>
    )
}

export default Navbar