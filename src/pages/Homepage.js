import { Layout } from 'antd';
import { Navbar } from "../components/Navbar";
import {Profile} from "../components/Profile";
import {ProfileDescription} from "../components/ProfileDescription";
import {Extra} from "../components/Extra";
import {WorkingExperience} from "../components/WorkingExperience";


export const Homepage = () => {
    return <>
        <Layout className="layout" style={{background: "#EBEEF2"}}>
            <Navbar></Navbar>
            <Profile></Profile>
            <ProfileDescription></ProfileDescription>
            <Extra></Extra>
            <WorkingExperience></WorkingExperience>
        </Layout>
    </>
}