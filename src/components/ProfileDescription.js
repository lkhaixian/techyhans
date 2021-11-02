import {Button, Col, Row} from "antd";
import robot from "../data/rob.png";
import "../css/profileDescription.css";

export const ProfileDescription = () => {
    return (
        <>
            <Row className='profile-description-container white-background'>
                <Col md={12} className='profile-description'>
                    <Row>
                        <h3 className='introduction'>Hello, I'm AI Enthusiast & Full Stack Developer</h3>
                    </Row>
                    <Row style={{'justify-content': 'center', 'padding-top': '10%'}}>
                        <Col>
                            <center>
                                <Button type="primary" shape="round" style={{'font-size': '1.5vw', height:  '10%', background: '#0bb3e4'}}>
                                    KNOW MORE
                                </Button>
                            </center>
                        </Col>
                    </Row>

                </Col>
                <Col md={12}>
                    <div className='robot-pic-div'>
                        <img src={robot} alt='robotPic' style={{width: '50%'}} className='robot-pic'/>
                    </div>
                </Col>
            </Row>
        </>
    )
}