import { Layout } from 'antd';
import { Navbar } from "../components/navbar";
import {Profile} from "../components/profile";


export const HomePage = () => {
    return <>
        <Layout className="layout" style={{background: "#EBEEF2"}}>
            <Navbar></Navbar>
            {/*<Profile></Profile>*/}
        </Layout>
    </>
}