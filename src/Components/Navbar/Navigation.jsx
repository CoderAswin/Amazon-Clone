import { Navbar, InputGroup, FormControl, Button, Form } from 'react-bootstrap'
import brandImage from './amazon.png'
import './Navigation.scss'
import { LocationOnOutlined, Search, ShoppingCart } from '@mui/icons-material'
import { Badge, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
const Navigation = ({ newCart }) => {

    return (
        <>
            <Navbar className='nav' >
                <Navbar.Brand className='brandLogo' href="#home">
                    <Link to='/'>
                        <img
                            src={brandImage}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Sneakers"
                        />
                    </Link>
                    <div className='locationIcon'>
                        <LocationOnOutlined />
                        <span>Hello<br />Select your address</span>
                    </div>
                    <div className="searchBox">
                        <InputGroup className="mb-3 searchInput">
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                            <Button className='searchIcon' variant="outline-secondary" id="button-addon1">
                                <Search />
                            </Button>
                        </InputGroup>
                    </div>
                    <div className="languageBox mb-2">
                        <Form.Select className='languageOptions' aria-label="Default select example">
                            <option>Lang</option>
                            <option value="1">English</option>
                            <option value="2">Hindi</option>
                        </Form.Select>
                    </div>
                    <div className="signIn">
                        <button>Hello,Sign in<br /><span>Accounts & Lists</span></button>
                    </div>
                    <div className="returnsBox">
                        <button>Returns<br /><span>& Orders</span></button>
                    </div>
                    <div className="cartBox">
                        <button>
                            <Badge component={Link} to='/cartpage' badgeContent={newCart.total_items} color="secondary">
                                <ShoppingCart style={{ color: 'white' }} className='shoppingCartIcon' />
                            </Badge>
                            <span>Cart</span>
                        </button>
                    </div>
                </Navbar.Brand>
            </Navbar>
        </>
    )
}

export default Navigation