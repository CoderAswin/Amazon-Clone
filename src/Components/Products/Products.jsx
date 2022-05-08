import { Grid } from '@material-ui/core'
import { Card, Container } from 'react-bootstrap'
import './Products.scss'
import { Link } from 'react-router-dom'

const Products = ({ productsList }) => {
    return (
        <div className='cardBody' >
            <Grid container spacing={2}>
                <Grid xs={12} lg={12} md={12}>
                    <div className="shopNow">
                        <h1>SHOP NOW</h1>
                    </div>
                </Grid>
                {productsList?.map(items => (
                    <Grid key={items.id} component={Link} to={`/productinfo/${items.name}/${items.id}`} item xs={12} lg={3} md={4} columns={4}  >
                        <Container >
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top"  src={items.image.url} />
                                <Card.Body>
                                    <Card.Title>
                                        <div className='productHeading' >
                                            <h5 >{items.name}</h5>
                                        </div>
                                    </Card.Title>
                                    <Card.Text>
                                        <div className="productInfo">
                                            <h4>₹599</h4>
                                            <small>₹999</small>
                                            <span>(40% off)</span>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Grid>
                    ))}
            </Grid>
        </div>
    )
}

export default Products