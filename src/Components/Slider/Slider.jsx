import {Carousel} from 'react-bootstrap'
import sale from './images/Sale.jpg'
import GuiltyMinds from './images/GuiltyMinds.jpg'
import kitchen from './images/kitchen.jpg'
import Mobiles from './images/Mobiles.jpg'
import Watches from './images/Watches.jpg'
import MiniTV from './images/MiniTV.jpg'

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={sale}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={GuiltyMinds}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={kitchen}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Mobiles}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Watches}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={MiniTV}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider