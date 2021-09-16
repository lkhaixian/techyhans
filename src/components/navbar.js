import {Col, Layout, Menu, Row} from 'antd';
import logo from '../data/logo.png'
import {Data} from '../data/data'
import '../css/navbar.css';
import {FacebookOutlined, InstagramOutlined, LinkedinOutlined, YoutubeOutlined} from "@ant-design/icons";

const { Item } = Menu;
const { navbarMenu } = Data;

export const Navbar = () => {
    const menuItem = (data) => {
        return data.map((item) => <Item key={item.name} className='menu-text'>
            {item.name}
        </Item>)
    }

    const socialMediaIcon = () => (
        <>
            <Item key="facebook" style={{padding: "0 10px"}}>
                <FacebookOutlined />
            </Item>
            <Item key="instagram" style={{padding: "0 10px"}}>
                <InstagramOutlined />
            </Item>
            <Item key="youtube" style={{padding: "0 10px"}}>
                <YoutubeOutlined />
            </Item>
            <Item key="linkedIn" style={{padding: "0 10px"}}>
                <LinkedinOutlined />
            </Item>
        </>
    );

    return (
        <>
            <Row className='header' style={{background: "#EBEEF2"}}>
                <Col md={5} sm={19}>
                    <div className='logo'>
                        <img src={logo} alt='logo' style={{width:"100%"}}/>
                    </div>
                </Col>
                <Col offset={10} md={9} sm={5}>
                    <Menu className='navigation navbar-menu' mode='horizontal' style={{background: "#EBEEF2"}}>
                        {menuItem(navbarMenu)}
                        {socialMediaIcon()}
                    </Menu>
                </Col>
            </Row>
        </>
    )
}