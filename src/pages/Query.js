import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Query = () => {
  const [data, setdata] = useState()
  const quesyPost = async () => {
    const { data } = await axios.get(`https://gameserver-39qc.onrender.com/user/query`)
    setdata(data)

  }
  useEffect(() => {
    quesyPost()

  }, [])
  console.log(data)
  return (
    <div>
      <table style={{ width: '100%' }}>
        <tr>
          <th>SL.No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Games</th>
          <th>Event Start</th>
          <th>Event End</th>
          <th>SetUp Time</th>
          <th>Total Hours</th>
          <th>Item Amount</th>
          <th>Delivery Charges</th>
          <th>Total Amount</th>
          <th>Pay Type</th>
        </tr>
        {
          data?.map((v, i) => {
            return <tr>
              <td>{i + 1}</td>
              <td>{v?.user?.name}</td>
              <td>{v?.user?.email}</td>
              <td>{v?.delivery?.name}, {v?.delivery?.Distance}KM</td>
              <td>
                <ol>
                  {v?.items?.map((v,i)=>{
                    return <li>{v?.name}</li>
                  })}
                </ol>
              </td>
              <td>{v?.eventStart}</td>
              <td>{v?.eventEnd}</td>
              <td>{v?.setUp}</td>
              <td>{v?.totalHours} Hr</td>
              <td>₹ {v?.totalItemAmount}</td>
              <td>₹ {v?.deliveryCharges}</td>
              <td>₹ {v?.totalAmount}</td>
              <td>{v?.payType}</td>

            </tr>
          })

        }
      </table>
    </div>
  )
}

export default Query