import { Grid, Container } from '@material-ui/core'
import './Footer.scss'

const Footer = () => {
    return (
        <div className='footerBody' >
            <Container>
                <Grid container className='footerContents'>
                    <Grid item xs={3} lg={3} md={3}>
                        <span>Get to Know Us</span>
                        <ul>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Press Releases</li>
                            <li>Amazon Cares</li>
                            <li>Gift a Smile</li>
                            <li>Amazon Science</li>
                        </ul>
                    </Grid>
                    <Grid item xs={3} lg={3} md={3}>
                        <span>Connect with Us</span>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                        </ul>
                    </Grid>
                    <Grid item xs={3} lg={3} md={3}>
                        <span>Make Money with Us</span>
                        <ul>
                            <li>Sell on Amazon</li>
                            <li>Sell under Amazon Accelerator</li>
                            <li>Amazon Global Selling</li>
                            <li>Become an Affiliate</li>
                            <li>Fulfilment by Amazon</li>
                            <li>Advertise Your Products</li>
                            <li>Amazon Pay on Merchants</li>
                        </ul>
                    </Grid>
                    <Grid item xs={3} lg={3} md={3}>
                        <span>Let Us Help You</span>
                        <ul>
                            <li>COVID-19 and Amazon</li>
                            <li>Your Account</li>
                            <li>Returns Centre</li>
                            <li>100% Purchase Protection</li>
                            <li>Amazon App Download</li>
                            <li>Amazon Assistant Download</li>
                            <li>Help</li>
                        </ul>
                    </Grid>
                </Grid>
            </Container>

        </div>
    )
}

export default Footer