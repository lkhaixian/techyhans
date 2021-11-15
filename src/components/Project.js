import React from "react";

import {Data} from "../data/data";
import { Container, Row } from "reactstrap";
import ProjectsCard from "../components/ProjectItem";
import { Fade } from "react-reveal";

const {projects} = Data;

const Projects = () => {
	return (
        <div className='linear-background'>
            <Row style={{padding: '2% 15% 1% 15%'}}>
                <div>
                    <h1 className='introduction-wexp' style={{color: 'white', fontSize: '3vw'}}>
                        Projects Experiences
                    </h1>
                </div>
            </Row>
            <Row className="row-grid align-items-center" style={{padding: '0% 15% 4% 15%'}}>
                {projects.map((data, i) => {
                    return <ProjectsCard key={i} data={data} />;
                })}
            </Row>
        </div>
					
	);
};

export default Projects;