import React from 'react';
import {TrophyFilled} from "@ant-design/icons";
import {Data} from '../data/data';
import TimelineItem from './AchievementItem';
import {Col,Row} from "antd"
import "../css/timeline.css";

const {timelineData} = Data

const Timeline = () =>
    timelineData.length > 0 && (
        <><div>
            <Row style={{ padding: '2% 15% 0% 15%' }}>
                <Col span={2}>
                    <TrophyFilled style={{  fontSize: '4vw', color: '#FFD700' }} />
                </Col>
                <Col span={22}>
                    <h1 style={{ color: 'black', textAlign: 'left'}}>
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
        </>
    );

export default Timeline;