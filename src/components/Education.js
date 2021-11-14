import React from 'react';
import {ReadOutlined} from "@ant-design/icons";
import {Data} from '../data/data';
import TimelineItem from './EducationItem';
import {Col,Row} from "antd"
import "../css/timeline.css";

const {timelineData} = Data

const Timeline = () =>
    timelineData.length > 0 && (
        <><div>
            <Row style={{ padding: '2% 15% 0% 15%' }}>
                <Col span={2}>
                    <ReadOutlined  style={{ fontSize: '4vw', color: '#0088CC'}} />
                </Col>
                <Col span={22}>
                    <h1 style={{ color: 'black', textAlign: 'left'}}>
                        Education
                    </h1>
                </Col>
            </Row>
            </div>
            <div className="timeline-container" style={{ padding: '0% 15%' }}>
                {timelineData.map((data, idx) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div>
        </>
    );

export default Timeline;