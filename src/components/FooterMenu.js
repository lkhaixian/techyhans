import {Col, Menu, Row} from 'antd';
import {CopyrightCircleOutlined}from '@ant-design/icons';
import {FacebookOutlined, InstagramOutlined, LinkedinOutlined, YoutubeOutlined} from "@ant-design/icons";
import "../css/profileDescription.css"

const { Item } = Menu;

export const FooterMenu = () => {

    const socialMediaIcon = () => (
        <>
            <Item key="facebook" style={{padding: "0 10px"}}>
                <FacebookOutlined style={{ fontSize: '1.5vw'}} />
            </Item>
            <Item key="instagram" style={{padding: "0 10px"}}>
                <InstagramOutlined style={{ fontSize: '1.5vw'}}/>
            </Item>
            <Item key="youtube" style={{padding: "0 10px"}}>
                <YoutubeOutlined style={{ fontSize: '1.5vw'}}/>
            </Item>
            <Item key="linkedIn" style={{padding: "0 10px"}}>
                <LinkedinOutlined style={{ fontSize: '1.5vw'}}/>
            </Item>
        </>
    );

    return (
        <>
            <Row className='gray-background' style={{padding: '0% 5% 0% 15%'}}>
                <Col span={17}>
                    <Menu mode='horizontal' style={{background: '#EBEEF2'}}>
                        <h4>Copyright <CopyrightCircleOutlined /> 2021 <a href="#home">hanshengliang</a>. All Rights Reserved</h4>
                    </Menu>
                </Col>
                <Col span={7}>
                    <Menu mode='horizontal' style={{background: '#EBEEF2'}}>
                        {socialMediaIcon()}
                    </Menu>
                </Col>
            </Row>
        </>
    )
}