import { Layout } from 'antd';
import { Navbar } from "../components/Navbar";
import {Profile} from "../components/Profile";
import {ProfileDescription} from "../components/ProfileDescription";
import {WorkingExperience} from "../components/WorkingExperience";
import {Skill} from "../components/Skill"
import {Footer} from "../components/Footer"
import { FooterMenu } from '../components/FooterMenu';
import Education from '../components/Education';
import Achievement from '../components/Achievement';
import Projects from '../components/Project'


export const Homepage = () => {
    return <>
        <Layout className="layout" style={{background: "#EBEEF2"}}>
            <Navbar/>
            <Profile/>
            <ProfileDescription/>
            <Education/>
            <Achievement/>
            <WorkingExperience/>
            <Skill/>
            <Projects/>
            <Footer/>
            <FooterMenu/>
        </Layout>
    </>
}