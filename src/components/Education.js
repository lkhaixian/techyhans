import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import React from "react";
import {Row} from "antd"

export const Education = () => {
    return (
        <div style={{background:'#EBEEF2'}}>
            <Row style={{padding: '2% 15%'}}>
                <h1  style={{color: 'black'}}>
                    Education
                </h1>
            </Row>
            <Row>
                <Timeline mode="alternate" style={{padding: '2% 15%'}}>
                    <Timeline.Item>
                        <a>Create a services site 2015-09-01</a>
                        </Timeline.Item>
                    <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
                    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo.
                    </Timeline.Item>
                    <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                    Technical testing 2015-09-01
                    </Timeline.Item>
                </Timeline>
            </Row>
        </div>
       
    );
}