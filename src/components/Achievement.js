import React from 'react';
import {TrophyFilled} from "@ant-design/icons";
import {Data} from '../data/data';
import TimelineItem from './AchievementItem';
import {Col,Row} from "antd"
import "../css/timeline.css";

const {timelineData} = Data

const Timeline = () =>
    timelineData.length > 0 && (
        <div style={{backgroundColor:"#ffffff"}}>
            <div>
            <Row style={{ padding: '2% 15% 0% 15%' }}>
                <Col span={2} style={{ padding: '1% 2% 0% 2%' }}>
                    <TrophyFilled style={{  fontSize: '3vw', color: '#FFD700' }} />
                </Col>
                <Col span={22}>
                    <h1 style={{ color: 'black', textAlign: 'left', fontSize: '3vw', padding: '0% 2% 0% 1%'}}>
                        Achievement
                    </h1>
                </Col>
            </Row>
            </div>
            <div className="timeline-container" style={{ padding: '0% 15%' }}>
                {timelineData.map((data, idx) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div>
        </div>
    );

export default Timeline;