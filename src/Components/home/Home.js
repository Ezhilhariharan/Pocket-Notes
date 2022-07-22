import React from 'react'
// import './Section.scss';
import '../../Components/home/Home.scss';
// import { useFormik } from 'formik';


function Home(props) {


    const { PersonalDetails } = props

    // useEffect(() => {
    //     const form = document.createElement('form');
    //     const script = document.createElement('script');

    //     script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    //     script.setAttribute('data-payment_button_id', 'pl_HdVuT54cUHmRLT');
    //     script.async = true;

    //     form.appendChild(script);
    //     console.log('razor', form);
    //     document.getElementById('razorPayBtn').appendChild(form);

    //     return () => {
    //         document.getElementById('razorPayBtn').removeChild(form);
    //     }
    // }, []);

    // const formik = useFormik({
    //     initialValues: {
    //         name: '', email: '', number: '', type: ''
    //     },
    //     onSubmit: values => {
    //         alert(values.name);
    //         alert(values.email);
    //         alert(values.number);
    //     },
    // });
    return (
        <div className="section">
             <div className="relative">

            <nav className="navbar navbar-expand-lg navbar-light bg-nav abs">
                <a className="navbar-brand mr-auto" href="/"><img className="img-pocket" src="image/Pocketnotes.png" alt="" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">

                        <li className="nav-item active mx-4">
                            <a className="nav-link" href="#home">HOME</a>
                        </li>
                        <li className="nav-item active mx-4">
                            <a className="nav-link" href="#books">BOOKS</a>
                        </li>
                        <li className="nav-item active mx-4">
                            <a className="nav-link" href="#why choose us">WHY CHOOSE US?</a>
                        </li>
                        <li className="nav-item active mx-4">
                            <a className="nav-link" href="#review">REVIEW</a>
                        </li>
                        <li className="nav-item active mx-4">
                            <a className="nav-link" href="#pricing">PRICING</a>
                        </li>

                    </ul>

                </div>
            </nav>
            </div>
            <div id="home" className="body d-lg-flex d-md-flex flex-row justify-content-lg-center justify-content-md-center pt-5">

                <div className="body-left">
                    <div className="paragraph">
                        <h1 className=""><span className="bold" onClick={PersonalDetails}>NEET 2021</span> Study materials </h1>
                        <h1>   Physics, Chemistry & Biology</h1>
                        <h2 className="body-left-h2"><span className="bold">Short</span> notes prepared by experts from <span className="bold">KOTA's</span> for last minute revisions</h2>
                        <h2 className="body-left-fontsmall d-none d-sm-block"> “Over 145 questions were directly asked in NEET 2020 from our special notes"</h2>
                        <div className="d-none d-sm-none d-md-block">
                            <h2 className="body-left-buttonup d-flex  flex-row justify-content-center ">NEET 2021 Early bird Offer:
                                Flat 75% off for the first 100 customers in this week!
                            </h2>
                            <div className="middle d-flex  flex-row justify-content-center mt-lg-5" >
                                <a href="#pricing"><button type="button" className="bttn " data-toggle="modal" data-target="#staticBackdrop">
                                    Buy Now @ Rs.299
                                </button></a>
                            </div>
                        </div>


                        {/* </div> */}
                    </div>
                </div>
                <div className="body-right">
                    <img className="img img-fluid" src="image/Notebook-amico.png" alt="" />
                    <div className="d-block d-sm-block d-md-none">
                        <h2 className="body-left-buttonup ">NEET 2021 Early bird Offer:
                            Flat 75% off for the first 100 customers!
                        </h2>
                        <div className="middle d-flex  flex-row justify-content-center" >
                        <a href="#pricing"><button className="bttn" data-toggle="modal" data-target="#staticBackdrop">Buy Now @ Rs.299</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home
