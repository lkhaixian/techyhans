import profilePic from "../data/personal.png";
import {Button, Col, Row} from 'antd';
import '../css/profile.css';

export const Profile = () => {
    return (
        <>
            <Row className='profile' style={{background: '#EBEEF2'}}>
                <Col md={12} className='profile-description'>
                    <Row>
                        <a>
                            <h1 className='name'>Han Sheng</h1>
                        </a>
                    </Row>
                    <Row>
                        <h3 className='profession'>Artifical Intelligence | Full Stack Development | Internet of Things | Embedded System</h3>
                    </Row>
                    <Row>
                        <Button type="primary" shape="round" style={{'font-size': '1.5vw', height:  '10%', background: '#0bb3e4'}}>
                            About Me
                        </Button>
                    </Row>

                </Col>
                <Col md={12}>
                    <div className='circle'>
                        <div className='profile-pic-div'>
                            <img src={profilePic} alt='profilePic' style={{width: '70%'}} className='profile-pic'/>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

