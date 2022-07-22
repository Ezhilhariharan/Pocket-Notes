import React from 'react'
import '../../Components/footer/Footer.scss';
import {
    Link
} from "react-router-dom";

function Footer(props) {
    return (

        <div className="sectiontthree pt-5 ">

            <div className="container-fluid footer pt-5 pb-3">
                <div className="row">
                    <div className="col-lg-6 d-lg-flex flex-row  justify-content-lg-center pt-5">
                        <div className="footer-width">
                            <img className="img-fluid w-50 ml-4" src="image/Pocketnotes_dark.png" />
                              <Link to="/PrivacyPolicy" style={{
                                textDecoration: 'none'
                            }} ><p className=" link pl-5 pt-3"> Privacy Policy </p></Link>
                            <Link to="/TermsAndCondition" style={{
                                textDecoration: 'none'
                            }}><p className="link pl-5"> Terms and Conditions</p></Link>
                            <Link to="/Cancellationpolicy" style={{
                                textDecoration: 'none'
                            }}><p className="pl-5 link"> Cancellation policy</p></Link>
                            <Link to="/Aboutus" style={{
                                textDecoration: 'none'
                            }}><p className="pl-5 link"> About us</p></Link>
                        </div>
                    </div>
                    <div className="col-lg-6 d-lg-flex flex-row justify-content-lg-center pt-5">
                        <div className="footer-width pl-5">
                            <a href="https://www.facebook.com/pocketnotes890">   <i className="fa-brands fa-facebook-f icon-size pr-3"> </i></a>
                            <a href="https://www.instagram.com/pocketnotes2021/">    <i className="fa-brands fa-instagram icon-size pr-3"> </i> </a>
                            <a href="https://www.linkedin.com/company/pocket-notes/about/?viewAsMember=true">    <i className="fa-brands fa-linkedin-in icon-size pr-2"> </i></a>
                            <p className="font-footer pt-3">No.34, Venkat narayana road, T Nagar Chennai-600017</p>
                            <p className="font-footer">  Ph: +91-95000 87287</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>



    )
}

export default Footer
