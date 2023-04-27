import { Box, Grid, Typography, FormControl, InputLabel, Select, MenuItem, Card, CardContent, CardActions, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { User, gameData } from '../utils/data'
import { DatePicker } from 'antd'
import moment from 'moment'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
const { RangePicker, } = DatePicker

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

const Checkout = () => {
    const data = gameData.filter((v, i) => i < 2)
    const [hexaTime, setHexaTime] = useState({
        start: '', setup: ''
    })
    const [fromtime, setfromtime] = useState()
    const [totime, settotime] = useState()
    const [totaltime, settotaltime] = useState()
    const [setupTime, setSetUpTime] = useState()
    const [deliveryCharge, setdeliveryCharge] = useState()
    const [payType,setPayType]= useState("cash")
    const [address, Setaddress] = useState(JSON.stringify(User[0]))


    const selecttime = (value) => {
        setfromtime(moment(value[0]?.$d).format('MM DD YYYY HH:mm'))
        settotime(moment(value[1]?.$d).format('MM DD YYYY HH:mm'))
        settotaltime(value[1].diff(value[0], 'Hours'))
        setHexaTime({ ...hexaTime, start: value[0] })

    }
    const history = useNavigate()
    const selectSetup = (value) => {
        setHexaTime({ ...hexaTime, setup: value })
        const diffValue = hexaTime.start?.diff(value, 'Hours')
        console.log("dd", diffValue)
        if (diffValue > 0 && diffValue <= 24) {
            setSetUpTime(moment(value.$d).format('MM DD YYYY HH:mm'))
        } else {
            toast.error('setup time should be within 24hrs hours before event start time')
        }
    }


    useEffect(() => {
        const value = JSON.parse(address).Distance * 2
        console.log(value)
        if (value > 30) {
            let newv = value - 30
            setdeliveryCharge(1500 + (newv * 50))
        } else {
            setdeliveryCharge(1500)
        }

    }, [address])
    const userData = useSelector(stack => stack.user?.user?.user)
    const totalAmount = userData?.cart.reduce((acc, cuu) => acc + cuu?.price, 0)
    const token = useSelector((state) => state?.user?.token)
    const quesyPost = async () => {
        if (fromtime, totime) {
            const diffValue = hexaTime.start?.diff(hexaTime.setup, 'Hours')
            if (diffValue > 0 && diffValue <= 24) {

                // const query = { item: userData?.cart, user: userData, eventStart: fromtime, eventEnd: totime, setUp: setupTime, totalItemAmount: totalAmount * (totaltime), totalHours: totaltime, delivery: JSON.parse(address), deliveryCharges: deliveryCharge, totalAmount: deliveryCharge + (totalAmount * (totaltime)),payType:payType }
                // const { data } = await axios.post(`https://gameserver-39qc.onrender.com/user/query`, query, { headers: { "x-auth-token": token } })
                alert('Query send sucesfully')
                // history('/')
            }
            toast.error('setup time should be within 24hrs hours before event start time')

        }
        else {
            toast.error('Fill all the field')
        }


    }

    return (
        <div>
            <Box sx={{ padding: 2 }}>
                <Typography variant='h2' sx={{ fontSize: '40px', fontWeight: 'bold' }}>Checkout Page</Typography>
                <Grid container>
                    <Grid xs={12} md={8} >

                        <Box>
                            <Box sx={{ border: '1px solid grey' }}>
                                <Typography variant='p' sx={{ fontWeight: 'bold', color: 'grey' }} >Cart Items</Typography>
                                {
                                    userData?.cart?.map((v, i) => {
                                        return <Box sx={{ display: 'flex', padding: '5px' }}>
                                            <img src={v.img} style={{ width: '50px', height: '50px', marginRight: '5px' }} />
                                            <Typography variant='p' component='h4'>{v.name}</Typography>
                                        </Box>
                                    })
                                }
                            </Box>

                            <Box sx={{ margin: '10px 0' }}>
                                <Typography variant='p' sx={{ fontWeight: 'bold', color: 'grey' }} component='div' >Event Duration Date</Typography>
                                <RangePicker showTime={"HH:mm"} format="MM DD YYYY HH:mm" onChange={selecttime} />

                            </Box>
                            <Box sx={{ margin: '10px 0' }}>
                                <Typography variant='p' sx={{ fontWeight: 'bold', color: 'grey' }} component='div' >Setup Date and Time</Typography>
                                <DatePicker defaultValue={setupTime} showTime={"HH:mm"} format="MM DD YYYY HH:mm" onChange={selectSetup} />

                            </Box>
                            <Box sx={{ margin: '10px 0' }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Location</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={address}
                                        label="Location"
                                        onChange={(e) => Setaddress(e.target.value)}
                                    >

                                        {
                                            User.map((v, i) => {
                                                return <MenuItem value={JSON.stringify(v)}>{v.name} ,( distance {v.Distance})</MenuItem>
                                            })

                                        }

                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{ margin: '10px 0' }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Payment Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={payType}
                                        label="Payment Type"
                                        onChange={(e) => setPayType(e.target.value)}
                                    >
                                        <MenuItem value='cash'>Cash</MenuItem>
                                        <MenuItem value='card'>Card</MenuItem>
                                        <MenuItem value='upi'>Upi</MenuItem>
                                        <MenuItem value='cheque'>cheque</MenuItem>

                                       

                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>

                    </Grid>
                    <Grid xs={12} md={4} >
                        <Card sx={{ maxWidth: 345 }}>

                            <CardContent>
                                <SideCard left="Total Items" right={userData?.cart?.length} />
                                <SideCard left="Total Amount per Hour" right={`₹ ${totalAmount}`} />
                                <SideCard left="Event Start Date And Time" right={fromtime} />
                                <SideCard left="Event End Date And Time" right={totime} />
                                <SideCard left="Event Duration (Hours)" right={`${totaltime?totaltime:'-'} Hr`} />
                                <SideCard left="Setup date and time" right={setupTime} />
                                <SideCard left="Total Distance" right={`${JSON.parse(address)?.Distance} km`} />
                                <SideCard left="Total Price" right={`₹ ${(totalAmount * (totaltime))?(totalAmount * (totaltime)):'-'}`} />
                                <SideCard left="Delivery Charges" right={`₹ ${deliveryCharge}`} />
                                <div style={{ width: '100%', border: '1px solid grey' }} />
                                <SideCard left="Total" right={`₹ ${deliveryCharge + (totalAmount * (totaltime))}`} />
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={quesyPost}>Send Query</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <ToastContainer />
        </div>
    )
}

export default Checkout