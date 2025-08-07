import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/zalo.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    {/* <MailchimpForm /> */}
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://zalo.me/0889535303">
                                <img src={navIcon1} alt="Icon" />
                            </a>
                            <a href="https://www.facebook.com/bncoanh">
                                <img src={navIcon2} alt="Icon" />
                            </a>
                            <a href="#">
                                <img src={navIcon3} alt="Icon" />
                            </a>
                        </div>
                        <p>Địa Chỉ: Cầu Giấy- Hà Nội</p>
                    </Col>
                </Row>
                <Row>
                    <div class="col-sm-6">
                        <iframe
                            width="100%"
                            height="300"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.74584026727155!2d105.77197155151403!3d21.035348900910794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134550010aa3659%3A0xe97d6db99f42a77b!2zQ8O0bmcgdHkgVE5ISCBRdeG7kWMgVOG6vyBIw6AgVGjDoG5oIEVkdQ!5e0!3m2!1svi!2s!4v1741615544933!5m2!1svi!2s"
                            frameborder="0"
                            scrolling="no"
                            marginheight="0"
                            marginwidth="0"
                        >
                            <a href="https://www.maps.ie/create-google-map/">
                                Embed Google Map
                            </a>
                        </iframe>
                    </div>
                </Row>
            </Container>
        </footer>
    );
};
