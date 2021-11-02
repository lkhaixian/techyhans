// import {Card, Col} from "antd";
import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	CardHeader,
	Col,
} from "reactstrap";

import Color from "color-thief-react";

import { Fade } from "react-reveal";

// import Image from "next/image";

// const {Meta} = Card;

// export const JobItem = ({name, src, description}) => {
//     const img = require("../data/workingExperience/" + src).default;
//     console.log(src);
//     console.log(img);


export const ExperienceCard = ({ data }) => {
    const image = require("../data/workingExperience/" + data.companylogo).default;
    return (
        <>
            {/* <Col md={6}>
                <Card
                    hoverable
                    style={{padding: '0% 5%'}}
                    cover={<img alt={name} src={img}/>}
                >
                    <Meta title={description}/>
                </Card>
            </Col> */}
            <Col lg="4">
                <Fade left duration={1000} distance="40px">
                    <Card
                        style={{ flex: 1 }}
                        className="shadow-lg--hover shadow border-0 text-center rounded"
                    >
                        <Color src={data.companylogo} format="hex">
                            {(color) => (
                                <CardHeader style={{ background: "rgb(68,132,244)" }}>
                                    <h5 className="text-white">{data.company}</h5>
                                </CardHeader>
                            )}
                        </Color>
                        <CardBody className="py-5" style={{padding: '0% 15%'}}>
                            <div
                                className="bg-white mb-3 img-center "
                                style={{ width: "12vw", height: "12vw" }}
                            >
                                <img 
                                    src={image}
                                    width={"120vw"}
                                    height={"120vw"}
                                    alt={data.companylogo}
                                />
                            </div>
                            <CardTitle tag="h5">{data.role}</CardTitle>
                            <CardSubtitle>{data.date}</CardSubtitle>
                            <CardText className="description my-3 text-left">
                                {data.desc}
                                <ul>
                                    {data.descBullets
                                        ? data.descBullets.map((desc) => {
                                                return <li key={desc}>{desc}</li>;
                                        })
                                        : null}
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                </Fade>
            </Col>
        </>
    )
}