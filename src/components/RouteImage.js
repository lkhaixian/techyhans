import "../css/routeImage.css"

export const RouteImage = ({name, src}) => {
    const img = require("../data/routingImage/" + src);
    return (
        <>
            <div className='route-image-container'>
                <a>
                    <h1 style={{textAlign: 'center', textTransform: 'capitalize'}}>
                        {name}
                    </h1>
                    <img src={img.default} key={name} alt={name} style={{width: '100%'}}/>
                </a>
            </div>
        </>
    )
};