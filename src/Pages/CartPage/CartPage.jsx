import { Grid, Container, Button } from '@material-ui/core'
import './CartPage.scss'
import {Link} from 'react-router-dom'

const CartPage = ({ newCart, removeItems , emptyCart}) => {
    return (
        <div className='cartbody'>
            <Container>
            {newCart.line_items?.length === 0 ? <h1>Your Amazon Cart Is Empty</h1> : <h1>Shopping Cart</h1> }
                <Grid container spacing={2}>
                    {newCart.line_items?.map(items => (
                        <Grid className='product' item xs={12} lg={9} >
                            <div key={items.id} className='productbody' >
                                <img src={items?.image.url} alt="" />
                                <div className='productInfo' >
                                    <span className='productheading' >{items?.product_name}</span>
                                    <span className='price' >{items?.line_total.formatted_with_symbol}</span>
                                    <span style={{ color: 'green' }} >In stock</span>
                                    <span>Eligible for FREE Shipping</span>
                                    <span>Quantity: {items?.quantity}</span>
                                    <Button onClick={() => removeItems(items?.id)} className='removeitem' variant="contained">Remove Item</Button>
                                </div>
                            </div>
                        </Grid>
                    ))}
                    <Grid className='subtotal' item xs={12} lg={3} >
                        <div>
                            <h3>Subtotal ({newCart?.total_unique_items} items): {newCart.subtotal?.formatted_with_symbol}</h3>
                            <div className="buttonBody">
                                <Button className='proceed' variant="contained">Proceed to Buy</Button>
                                {newCart.line_items?.length === 0 ? <Button component={Link} to='/' className='delete' variant="contained">Add More Items</Button>
                                 :<Button onClick={()=>emptyCart()} className='delete' variant="contained">Empty Cart</Button>}
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default CartPage