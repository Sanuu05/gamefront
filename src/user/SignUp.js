import React, { useEffect, useState } from 'react'
import { Card, CardContent, Typography, CardActions, Button, Box, Input } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { userSign } from '../action/user'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
    const [data, setData] = useState({
        name: '', email: '', password: '', cpassword: ''
    })
    const dispatch = useDispatch()
    const history = useNavigate()

    const submit = () => {
        dispatch(userSign(data))
    }
    const userData = useSelector(state => state?.user?.signin)
    
    useEffect(() => {
        if (userData) {
            history('/login')
        }


    }, [userData])
    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Card sx={{ maxWidth: 445 }}>
                    <Typography variant='h5' sx={{ padding: "5px" }}>SignUp</Typography>

                    <CardContent>
                        <Input type='text' placeholder='Name' sx={{ width: '100%', marginBottom: '10px' }} onChange={(e) => setData({ ...data, name: e.target.value })} />
                        <Input type='email' placeholder='Email' sx={{ width: '100%', marginBottom: '10px' }} onChange={(e) => setData({ ...data, email: e.target.value })} />
                        <Input type='password' placeholder='Password' sx={{ width: '100%', marginBottom: '10px' }} onChange={(e) => setData({ ...data, password: e.target.value })} />
                        <Input type='password' placeholder='Confirm Password' sx={{ width: '100%', marginBottom: '10px' }} onChange={(e) => setData({ ...data, cpassword: e.target.value })} />
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={submit}>Signup</Button>
                    </CardActions>
                </Card>
            </Box>

        </div>
    )
}

export default SignUp