import React from 'react'
import { Grid, Button } from '@material-ui/core'
import { Form } from 'react-bootstrap'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import './ProductBuyout.scss'
import {useState} from 'react'

const ProductBuyOut = ({productName , updateCart , id}) => {

    const [quantity, setQuantity] = useState(1)

    return (
        <Grid className='productDescriptionBody' item xs={12} lg={4} >
            <div>
                <h1>{productName}</h1>
            </div>
            <div className='ratings' >
                <Stack spacing={1}>
                    <Rating name="half-rating" defaultValue={2.5} precision={1} />
                </Stack>
                <span>16,972 ratings | 24 answered questions</span>
            </div>
            <div className='productPrice'>
                <h4>₹599.00</h4>
                <small>₹999.00</small>
            </div>
            <div className="cartContent">
                <span style={{ color: 'green' }}>In stock.</span>
                <div className='quantity' >
                    <span>Quantity:</span>
                    <Form.Select value={quantity} onChange={(e)=>setQuantity(e.target.value)} style={{ width: 70, marginLeft: 10 }} aria-label="Default select example">
                        <option value='1'>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </Form.Select>
                </div>
            </div>
            <div className="buttonBody">
                <Button onClick={()=>updateCart(id,quantity)} className='addtocart' variant="contained">Add to Cart</Button>
                <Button className='buynow' variant="contained">Buy Now</Button>
            </div>
        </Grid>
  )
}

export default ProductBuyOut