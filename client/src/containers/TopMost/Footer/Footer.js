import {
    Space
} from "antd";



export const Footer = () => {

    const footerStyle = {
        color: '#ba0c2f',
        fontSize: '24px',
        fontWeight: 'bold'
    }

    const sectionStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
        gap: '20px'
    }

    return (
       <section style={sectionStyle}>
           <span
                className="logo"
                style={footerStyle}>
               expanse
           </span>
           <span>©2022 Created by CSCI 4050 Group 10</span>
       </section>
    ); // return
} // export

export default Footer;