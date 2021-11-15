import {Col,Row} from "antd";
import React from "react";
// import { Bar } from "@ant-design/charts";
import "../css/experience.css";
// import "../css/Progress.css";
import {Data} from "../data/data";

// const {skillLevel} = Data;
const {skills} = Data



export const Skill = () => {
    const skillbar = skills.map(({id,content,porcentage,value}) => {
        return (
            <React.Fragment key={id}>
                <span>{content}</span>{" "}
                <span className="pull-right">
                {porcentage}
                </span>
                <div className="progress">
                <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: porcentage }}
                    aria-valuenow={value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                ></div>
                </div>
            </React.Fragment>
            );
    });
    
    return(
        <>
            <div className='linear-background-experience'>
                <Row style={{padding: '2% 15%'}}>
                    <h1 className='introduction' style={{color: 'black', fontSize: '3vw'}}>
                        Why Choose Me?
                        Because Skills Matters!!!
                    </h1>
                </Row>
                <Row style={{padding: '0% 15% 2% 15%'}}>
                    <Col md={24} sm={24}>
                        <div className="skill-mf" >
                            <p className="title-s">Skill</p>
                            {skillbar}
                        </div>
                    </Col>
                </Row>

            </div>
        </>
    )
}