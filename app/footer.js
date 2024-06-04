import React from 'react';

const Footer = ({ setShowForm }) => {
    return (
        <>
            <div className="row_search">
                <div className="row_text">Add A New Movie</div>
                <div className="row_text2">To add a movie you have to fill a form. The added movie will appear in the list above.</div>
                <div className="row_detail">
                    <div className="row_click" onClick={() => setShowForm(true)}>New Movie</div>
                    <img src="next.svg" alt="Next" />
                </div>
            </div>
            <div className="footer6">
                <div className="image11">
                    <img src="vercel.svg" alt="Vercel" />
                    <img src="next.svg" alt="Next" />
                </div>
            </div>
        </>
    );
};

export default Footer;
