import {
    Carousel as AntDCarousel
} from "antd";

export const Carousel = props => {
    console.log(props);
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    const bannerStyle = {
        margin: 'auto'
    }
    return (
        <AntDCarousel autoplay>
            <div>
                <img alt="BANNER 1" src={`images/promotions/banner1.webp`} style={bannerStyle}/>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
        </AntDCarousel>
    );
}

export default Carousel;