import {
    Carousel as AntDCarousel
} from "antd";

export const Carousel = props => {
    console.log(props);
    const contentStyle = {
        maxHeight: '190px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#ba0c2f',
        overflow: 'hide'
    };

    /* background-color: #ba0c2f !important; */

    const bannerStyle = {
        margin: 'auto'
    }
    return (
        <AntDCarousel autoplay dotPosition="top" style={contentStyle}>
            <div>
                <img alt="BANNER 1" src={`images/promotions/banner1.webp`} style={bannerStyle}/>
            </div>
            <div>
                <img alt="BANNER 1" src={`images/promotions/WHM22_Books_1500x300_Header.jpeg`} height="190" style={bannerStyle}/>
            </div>
        </AntDCarousel>
    );
}

export default Carousel;