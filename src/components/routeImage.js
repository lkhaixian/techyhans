export const RouteImage = ({name, src}) => {
    return (
        <>
            <div style={{padding: '0 5%'}}>
                <img src={src} key={name} alt={name} style={{width: '100%'}}/>
            </div>
        </>
    )
};