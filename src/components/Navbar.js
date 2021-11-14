import {Col, Menu, Row} from 'antd';
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
                <FacebookOutlined style={{ fontSize: '1.5vw'}}/>
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
            <Row className='header' style={{background: "#EBEEF2"}}>
                <Col span={15}>
                    <div className='logo'>
                        <img src={logo} alt='logo' style={{width:"30%", marginLeft:'10%'}}/>
                    </div>
                </Col>
                <Col span={9}>
                    <Menu className='navigation navbar-menu' mode='horizontal' style={{background: "#EBEEF2"}}>
                        {menuItem(navbarMenu)}
                        {socialMediaIcon()}
                    </Menu>
                </Col>
            </Row>
        </>
    )
}