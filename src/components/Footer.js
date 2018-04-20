import React from 'react';

const Footer = (props) => {
    return (
        <footer>
            {props.terms &&
                <span className="terms">Terms and Conditions</span>
            }
            <div className="baryellow"></div>
            <div className="bargreen"></div>
            <div className="barorange"></div>
        </footer>
    );
}

Footer.defalutProps = {
    terms: false,
}

export default Footer;

