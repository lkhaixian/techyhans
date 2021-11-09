// import {Card, Col} from "antd";
import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	CardHeader,
} from "reactstrap";

import Color from "color-thief-react";

import { Fade } from "react-reveal";
import {Row} from "antd";

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
				        <Row style={{ display: 'flex', justifyContent: 'center' }}>
					        <div>
						        <img
							        src={image}
							        width={"100vw"}
							        alt={data.companylogo}
						        />
					        </div>
				        </Row>
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
        </>
    )
}
