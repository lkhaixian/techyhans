import {Menu, Col, Row} from 'antd';
import "../css/profileDescription.css"
import logo from '../data/logo.png'
import {Data} from '../data/data'

const { Item } = Menu;
const { footerMenuAboutMe, footerMenuPortfolio,footerMenuContact } = Data;

export const Footer = () => {
    const menuItem = (data) => {
        return data.map((item) => <Item key={item.name} className='menu-text'>
            {item.name}
        </Item>)
    }
    return (
        <Row className='white-background' gutter={16} style={{padding: '5% 15%',background: '#EBEEF2'}}>
            <Col md={6} sm={24}>
                <div className='logo'>
                    <img src={logo} alt='logo' style={{width:"80%"}}/>
                </div>
                <br/>
                <h4>Hello! I’m Han Sheng. Experienced in various Artificial Intelligent based project.</h4>
            </Col>
            <Col md={6} sm={24}>
                <h2>About me</h2>
                <Menu className='navigation navbar-menu' mode='vertical' style={{background: '#EBEEF2'}}>
                    {menuItem(footerMenuAboutMe)}
                </Menu>
            </Col>
            <Col md={6} sm={24}>
                <h2>Portfolio</h2>
                <Menu className='navigation navbar-menu' mode='vertical' style={{background: '#EBEEF2'}}>
                    {menuItem(footerMenuPortfolio)}
                </Menu>
            </Col>
            <Col md={6} sm={24}>
                <h2>Contact</h2>
                <Menu className='navigation navbar-menu' mode='vertical' style={{background: '#EBEEF2'}}>
                    {menuItem(footerMenuContact)}
                </Menu>
            </Col>
        </Row>
        
    )
}