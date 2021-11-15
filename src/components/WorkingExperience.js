// import {Row} from "antd";
import React from "react";
import "../css/workingExperience.css";
import {Data} from "../data/data";
import {Col,Row} from "reactstrap";

// import ExperienceCard from "../components/ExperienceCard";
import {ExperienceCard} from "./WorkingExperienceItem";

// const {workingExperiences} = Data;
const {experience} = Data;

export const WorkingExperience = () => {
    // const populateJobs = workingExperiences.map(({name, src, description}) => {
    //     console.log("name" + name);
    //     console.log("src" + src);
    //     console.log("description" + description);
    //         return <JobItem name={name} src={src} description={description}/>
    //     });

    return(
        <div className='linear-background'>
            <Row style={{padding: '2% 15%'}}>
                <h1 className='introduction-wexp' style={{color: 'white', fontSize: '3vw'}}>
                    My working experiences tell more about me
                </h1>
            </Row>
            {/* <Row style={{padding: '2% 10%'}}>
                {populateJobs}
            </Row> */}
            <Row className="row-grid align-items-center" style={{padding: '0% 15% 2% 15%'}}>
                {experience.map((data, i) => {
                    return (
                        <>
                            <Col lg="4">
                                <ExperienceCard key={i} data={data} />
                            </Col>
                        </>
                    )
                })}
            </Row>
        </div>

    )
}
