import React, { useEffect, useState } from 'react'
import { Card, CardContent, Typography, CardActions, Button, Box, Input } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { loguser } from '../action/user'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [data, setData] = useState({
        email: '', password: ''
    })
    const dispatch = useDispatch()
    const token = useSelector((state) => state?.user?.token)
    const history = useNavigate()
    const loginSubmit = () => {
        dispatch(loguser(data))
    }

    useEffect(() => {
        if (token) {
            history('/')

        }


    }, [history, token])

    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Card sx={{ maxWidth: 445 }}>
                    <Typography variant='h5' sx={{ padding: "5px" }}>Login</Typography>

                    <CardContent>
                        <Input type='email' placeholder='Email' sx={{ width: '100%', marginBottom: '10px' }} onChange={(e) => setData({ ...data, email: e.target.value })} />
                        <Input type='password' placeholder='Password' sx={{ width: '100%', marginBottom: '10px' }} onChange={(e) => setData({ ...data, password: e.target.value })} />
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={loginSubmit}>Login</Button>
                    </CardActions>
                </Card>
            </Box>

        </div>
    )
}

export default Login