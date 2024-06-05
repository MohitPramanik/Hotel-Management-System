import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";

function CarouselSection() {
    return (
        <div>
            <Carousel>
                <Carousel.Item style={{ height: "80vh" }} interval={2000}>
                    <img
                        src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww"
                        alt=""
                        className="h-100 w-100 object-fit-cover"
                    />
                    <Carousel.Caption className="carousel-text d-flex flex-column">
                        <p className="display-3 fw-bold">
                            Welcome to Royal roms
                        </p>
                        <p className="fs-4 fw-bold">
                            Experience Luxury and Comfort
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "80vh" }} interval={2000}>
                    <img
                        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/351751546.jpg?k=dceb6616cbdbc19ebd95807d3c2cf63fdf21b6bedbaa08be385e9d963a0003ce&o=&hp=1"
                        alt=""
                        className="h-100 w-100 object-fit-cover"
                    />
                    <Carousel.Caption className="carousel-text d-flex flex-column">
                        <p className="display-3 fw-bold">Gourmet Dining</p>
                        <p className="fs-4 fw-bold">
                            At Our Signature Restaurant
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "80vh" }} interval={2000}>
                    <img
                        src="https://image-tc.galaxy.tf/wijpeg-6ult0bbmbwp00d6blsctgv83j/alextphoto-com-think-hospitality-esme-room-388-01-website_standard.jpg?crop=111%2C0%2C1779%2C1334"
                        alt=""
                        className="h-100 w-100 object-fit-cover"
                    />
                    <Carousel.Caption className="carousel-text d-flex flex-column">
                        <p className="display-3 fw-bold">Prime Location</p>
                        <p className="fs-4 fw-bold">
                            Minutes from Major Attractions
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselSection;
