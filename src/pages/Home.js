import React from 'react'
import { gameData, User } from './../utils/data'
import { Box, Grid, Typography, CardMedia, CardContent, Card, CardActions, Button } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import { useSelector } from 'react-redux'
const Home = () => {
  const token = useSelector((state) => state?.user?.token)
  const addToCart = async (cart) => {
    if (token) {
      const { data } = await axios.patch('https://gameserver-39qc.onrender.com/user/addtocart', cart, { headers: { "x-auth-token": token } })
      toast.success("Item added to the cart")
    } else {
      toast.error('Some error happens')
    }



  }
  return (
    <Box>
      <Grid container spacing={2}>
        {
          gameData?.map((v, i) => {
            return <Grid sx={12} md={3}  >

              <Box sx={{ padding: 2 }}>
                <Card sx={{ minHeight: 455, width: '100%' }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={v.img}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {v.name}
                    </Typography>
                    <Typography variant="p" color="text.secondary" >
                      {v?.des}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" >
                      ₹ {v?.price}/ hr
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => addToCart(v)}>Add To Cart</Button>
                  </CardActions>
                </Card>
              </Box>

            </Grid>
          })
        }
        <ToastContainer />
      </Grid>
    </Box>
  )
}

export default Home