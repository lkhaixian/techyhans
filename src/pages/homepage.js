import { Layout } from 'antd';
import { Navbar } from "../components/navbar";
import {Profile} from "../components/profile";
import {ProfileDescription} from "../components/profileDescription";
import {Extra} from "../components/extra";


export const HomePage = () => {
    return <>
        <Layout className="layout" style={{background: "#EBEEF2"}}>
            <Navbar></Navbar>
            <Profile></Profile>
            <ProfileDescription></ProfileDescription>
            <Extra></Extra>
        </Layout>
    </>
}