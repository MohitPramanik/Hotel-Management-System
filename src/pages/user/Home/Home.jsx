import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card";
import CarouselSection from "./CarouselSection";
import Facilities from "./Facilities";
import "./Home.css";
import Story from "./Story";
import cardData from "./cardData";

function Home() {
    return (
        <div>
            <CarouselSection />

            {/* Card section */}
            <Container>
                <Row>
                    {cardData.map((card) => (
                        <Col
                            key={card.id}
                            xl={3}
                            md={6}
                            className="d-flex justify-content-center"
                        >
                            <Card {...card} />
                        </Col>
                    ))}
                </Row>
            </Container>

            <Story />

            <Facilities />
        </div>
    );
}

export default Home;
