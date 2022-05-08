import { Grid, Container} from '@material-ui/core'
import './ProductInfo.scss'
import { useState } from 'react'
import ProductBuyOut from './ProductBuyOut/ProductBuyOut'
import { useParams } from 'react-router-dom'

const ProductInfo = ({ productsList, updateCart }) => {

    const params = useParams()

    const { id } = params
    const { image, name, assets } = productsList.find(item => item.id === id) || {}

    const [mouseOver, setMouseOver] = useState(image?.url)


    return (
        <div className='productInfoBody'>
            <Container>
                <Grid container spacing={2}>
                    <Grid className='productFlex' item xs={12} lg={8} >
                        {assets?.map(image => (
                            <div onMouseOver={()=>setMouseOver(image?.url)} key={image.id} className="productSlideShow">
                                <img  src={image?.url} alt="" />
                            </div>
                        ))}

                        <div className="productImage">
                            <img src={mouseOver} alt="" />
                        </div>
                    </Grid>
                    <ProductBuyOut productName={name} id={id} updateCart={updateCart} />
                </Grid>
            </Container>

        </div>
    )
}

export default ProductInfo