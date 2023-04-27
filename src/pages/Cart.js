import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from '../action/user'
import { Box, Button, Grid, Typography, Card, CardContent, CardActions } from '@mui/material'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { NavLink } from 'react-router-dom'
const SideCard = ({ left, right }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography gutterBottom variant="h6" sx={{ fontSize: '14px', fontWeight: 'bold' }} component="div">
                {left}
            </Typography>
            <Typography gutterBottom variant="h6" sx={{ fontSize: '12px', fontWeight: 'bold' }} component="div">
                {right}
            </Typography>
        </Box>
    )
}
const Cart = () => {
    const [deleted, setdeleted] = useState()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadUser())
    }, [deleted])

    const cartData = useSelector(stack => stack.user?.user?.user?.cart)
    console.log(cartData)
    const token = useSelector((state) => state?.user?.token)
    const delfromCart = async (id) => {
        if (token) {
            const { data } = await axios.patch(`https://gameserver-39qc.onrender.com/user/delCartItem`, { id: id }, { headers: { "x-auth-token": token } })
            setdeleted(data)
            toast.success('Item removed')

        } else {
            toast.error('some error happen')
        }
    }
    const totalAmount = cartData?.reduce((acc, cuu) => acc + cuu?.price, 0)
    return (
        <div className='cart'>
            <Box>
                <Grid container>
                    <Grid xs={12} md={8}>
                        {
                            cartData?.map((v, i) => {
                                return <div className='cartcard'>
                                    <div className='left'>
                                        <img src={v?.img} />
                                    </div>
                                    <div className='right'>
                                        <h4>{v?.name}</h4>
                                        <p>{v?.des}</p>
                                        <p>{v?.price}/hr</p>
                                        <Button variant='contained' color='error' onClick={() => delfromCart(v?.id)} >Remove</Button>
                                    </div>
                                </div>
                            })
                        }
                    </Grid>
                    <Grid xs={12} md={4}>
                        <Card sx={{ maxWidth: 345 }}>

                            <CardContent>
                                <SideCard left="Total Items" right={cartData?.length} />
                                <SideCard left="Total Price per hour" right={totalAmount} />


                            </CardContent>
                            <CardActions>
                                <NavLink style={{textDecoration:'none',fontSize:'20px',color:'orange',fontWeight:'bold',padding:'5px',border:'1px solid orange'}} to='/checkout'>Process to Checkout</NavLink>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

<ToastContainer/>

        </div>
    )
}

export default Cart