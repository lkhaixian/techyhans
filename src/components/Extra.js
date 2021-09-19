import {Col, Row} from "antd";
import {Data} from "../data/data";
import {RouteImage} from "./RouteImage";

const {routingImages} = Data;

export const Extra = () => {
    const routeImages = routingImages.map(( {name, src}) => {

        return (
            <Col md={8}>
                <RouteImage name={name} src={src}/>
            </Col>
        )
    })
    return (
        <>
            <Row className='white-background'>
                {routeImages}
            </Row>
        </>
    )
}