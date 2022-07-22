import React, { useEffect } from 'react'
// import Card from "./Card.js"
// import CardTwo from "./CardTwo.js"
import '../../Components/plans/Plans.scss';

function Plans() {

    const physics = () => {
        const form = document.createElement('form');
        const script = document.createElement('script');

        script.src = "https://checkout.razorpay.com/v1/payment-button.js";
        script.setAttribute('data-payment_button_id', 'pl_Hf1S5ncFQKGZgI');
        script.async = true;

        form.appendChild(script);
        // console.log('razor', form);
        document.getElementById('razorPayBtnphy').appendChild(form);

        return () => {
            document.getElementById('razorPayBtnphy').removeChild(form);
        }
    }

    const chemistry = () => {
        const form = document.createElement('form');
        const script = document.createElement('script');

        script.src = "https://checkout.razorpay.com/v1/payment-button.js";
        script.setAttribute('data-payment_button_id', 'pl_Hf1PVEMHoOtXTG');
        script.async = true;

        form.appendChild(script);
        // console.log('razor', form);
        document.getElementById('razorPayBtnch').appendChild(form);

        return () => {
            document.getElementById('razorPayBtnch').removeChild(form);
        }
    }

    const biology = () => {
        const form = document.createElement('form');
        const script = document.createElement('script');

        script.src = "https://checkout.razorpay.com/v1/payment-button.js";
        script.setAttribute('data-payment_button_id', 'pl_HdVuT54cUHmRLT');
        script.async = true;

        form.appendChild(script);
        // console.log('razor', form);
        document.getElementById('razorPayBtnbio').appendChild(form);

        return () => {
            document.getElementById('razorPayBtnbio').removeChild(form);
        }
    }

    const bundle = () => {
        const form = document.createElement('form');
        const script = document.createElement('script');

        script.src = "https://checkout.razorpay.com/v1/payment-button.js";
        script.setAttribute('data-payment_button_id', 'pl_Hf1SqAOIpyV5M2');
        script.async = true;

        form.appendChild(script);
        // console.log('razor', form);
        document.getElementById('razorPayBtnbun').appendChild(form);

        return () => {
            document.getElementById('razorPayBtnbun').removeChild(form);
        }
    }


    useEffect(() => {
        physics();
        chemistry();
        biology();
        bundle();
    }, []);


    return (
        <div className="plans bg">
            <div id="review" className="scroll pt-5">
                <div id="carouselExampleControls" className="carousel slide d-none d-sm-none d-md-none d-lg-block" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="d-flex flex-row boxes">
                                <div className="box-footer d-flex flex-row  ">
                                    <div className="icon d-flex flex-row justify-content-center">
                                        <img className=" img-fluid" src="image/Thayumanavan.jpg" alt="" />
                                    </div>
                                    <div className="paragraph-box ml-2">
                                        <div className="d-flex flex-row ">
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                        </div>
                                        <p className="grey mt-2">These notes are of top quality. Revising for my exams was never this easy.
                                        </p>
                                        <p><span className="blue">-Thayumanavan </span></p>
                                    </div>
                                </div>

                                <div className="box-footer d-flex flex-row  ml-5">
                                    <div className="icon d-flex flex-row justify-content-center">
                                        <img className=" img-fluid" src="image/Dineeshsv.jpg" alt="" />
                                    </div>
                                    <div className="paragraph-box ml-2">
                                        <div className="d-flex">
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                        </div>
                                        <p className="grey mt-2">This is required when, for text is not yet available
                                            This is required when, for text is not yet available</p>
                                        <p><span className="blue">-Dineesh SV</span></p>
                                    </div>
                                </div>

                                <div className="box-footer d-flex flex-row  ml-5">
                                    <div className="icon d-flex flex-row justify-content-center">
                                        <img className=" img-fluid" src="image/rambabu.jpg" alt="" />
                                    </div>
                                    <div className="paragraph-box ml-2">
                                        <div className="d-flex flex-row ">
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                        </div>
                                        <p className="grey mt-2">Great set of questions. Filled almost half my answer sheet with ease as they were of direct match

                                        </p>
                                        <p><span className="blue">-Ram babu </span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item ">
                            <div className="d-flex flex-row boxes">

                                <div className="box-footer d-flex flex-row ">
                                    <div className="icon d-flex flex-row justify-content-center">
                                        <img className=" img-fluid" src="image/SriBalaji.jpg" alt="" />
                                    </div>
                                    <div className="paragraph-box ml-2">
                                        <div className="d-flex flex-row ">
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                        </div>
                                        <p className="grey mt-2">Had a great time preparing with pocket notes. Eased my learning journey with a range of tips and tricks that helped me crack my exam.

                                        </p>
                                        <p><span className="blue">-Sri Balaji </span></p>
                                    </div>
                                </div>

                                <div className="box-footer d-flex flex-row  ml-5">
                                    <div className="icon d-flex flex-row justify-content-center">
                                        <img className=" img-fluid" src="image/Sandheep.jpg" alt="" />
                                    </div>
                                    <div className="paragraph-box ml-2">
                                        <div className="d-flex">
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                        </div>
                                        <p className="grey mt-2">I prepared for my entire test within two weeks from scratch using pocket notes. The makers did an amazing job with the material


                                        </p>
                                        <p><span className="blue">-Sandheep</span></p>
                                    </div>
                                </div>

                                <div className="box-footer d-flex flex-row  ml-5">
                                    <div className="icon d-flex flex-row justify-content-center">
                                        <img className=" img-fluid" src="image/VigneshSP.jpg" alt="" />
                                    </div>
                                    <div className="paragraph-box ml-2">
                                        <div className="d-flex flex-row ">
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                        </div>
                                        <p className="grey mt-2">
                                            Notes for physics chemistry and biology are too good! Most of the questions directly appeared in 2020 paper!


                                        </p>
                                        <p><span className="blue">-Vignesh SP </span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                        <span className="sr-only">Next</span>
                    </a>
                </div>



                <div id="carouselExampleControl" className="carousel slide d-block d-sm-block d-md-block d-lg-none" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className=" boxes">
                                <div className="box-footer d-flex flex-row  ">
                                    <div className="icon d-flex flex-row justify-content-center">
                                        <img className=" img-fluid" src="image/Thayumanavan.jpg" alt="" />
                                    </div>
                                    <div className="paragraph-box ml-2">
                                        <div className="d-flex flex-row ">
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                        </div>
                                        <p className="grey mt-2">These notes are of top quality. Revising for my exams was never this easy.
                                        </p>
                                        <p><span className="blue">-Thayumanavan </span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item ">
                            <div className=" boxes">
                                <div className="box-footer d-flex flex-row  ml-5">
                                    <div className="icon d-flex flex-row justify-content-center">
                                        <img className=" img-fluid" src="image/Dineeshsv.jpg" alt="" />
                                    </div>
                                    <div className="paragraph-box ml-2">
                                        <div className="d-flex">
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                        </div>
                                        <p className="grey mt-2">This is required when, for text is not yet available
                                            This is required when, for text is not yet available</p>
                                        <p><span className="blue">-Dineesh SV</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item ">
                            <div className=" boxes">
                                <div className="box-footer d-flex flex-row  ml-5">
                                    <div className="icon d-flex flex-row justify-content-center">
                                        <img className=" img-fluid" src="image/rambabu.jpg" alt="" />
                                    </div>
                                    <div className="paragraph-box ml-2">
                                        <div className="d-flex flex-row ">
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                        </div>
                                        <p className="grey mt-2">Great set of questions. Filled almost half my answer sheet with ease as they were of direct match

                                        </p>
                                        <p><span className="blue">-Ram babu </span></p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="carousel-item ">
                            <div className=" boxes">

                                <div className="box-footer d-flex flex-row  ml-5">
                                    <div className="icon d-flex flex-row justify-content-center">
                                        <img className=" img-fluid" src="image/SriBalaji.jpg" alt="" />
                                    </div>
                                    <div className="paragraph-box ml-2">
                                        <div className="d-flex flex-row ">
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                        </div>
                                        <p className="grey mt-2">Had a great time preparing with pocket notes. Eased my learning journey with a range of tips and tricks that helped me crack my exam.

                                        </p>
                                        <p><span className="blue">-Sri Balaji </span></p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="carousel-item ">
                            <div className=" boxes">
                                <div className="box-footer d-flex flex-row  ml-5">
                                    <div className="icon d-flex flex-row justify-content-center">
                                        <img className=" img-fluid" src="image/Sandheep.jpg" alt="" />
                                    </div>
                                    <div className="paragraph-box ml-2">
                                        <div className="d-flex">
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                        </div>
                                        <p className="grey mt-2">I prepared for my entire test within two weeks from scratch using pocket notes. The makers did an amazing job with the material


                                        </p>
                                        <p><span className="blue">-Sandheep</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item ">
                            <div className=" boxes">
                                <div className="box-footer d-flex flex-row  ml-5">
                                    <div className="icon d-flex flex-row justify-content-center">
                                        <img className=" img-fluid" src="image/VigneshSP.jpg" alt="" />
                                    </div>
                                    <div className="paragraph-box ml-2">
                                        <div className="d-flex flex-row ">
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                            <i className="fa-solid fa-star star"></i>
                                        </div>
                                        <p className="grey mt-2">
                                            Notes for physics chemistry and biology are too good! Most of the questions directly appeared in 2020 paper!


                                        </p>
                                        <p><span className="blue">-Vignesh SP </span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <a className="carousel-control-prev" href="#carouselExampleControl" role="button" data-slide="prev">
                        {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControl" role="button" data-slide="next">
                        {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                        <span className="sr-only">Next</span>
                    </a>
                </div >


            </div >
            <div id="pricing" className="d-flex flex-row justify-content-center height pt-md-5">
                <h4> Plans & Pricing</h4>
            </div>
            <div className="body-sectionthree d-md-flex flex-row justify-content-center mt-5 bg">
                <div className="card-plans">
                    <div className="card-box mr-lg-4 mr-md-4 mr-xl-5 ">
                        <h3 className="pt-4">Physics</h3>
                        <p><img className="cards-img" src="image/Physics3D.png" alt="" /></p>
                        <h4 className="">RS 199</h4>
                        <p className="pa">Digital Copies accessible from any mobile device.</p>
                        <div className="d-flex flex-row justify-content-center ">
                            <div id="razorPayBtnphy" className="btn-card">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-plans">
                    <div className="card-box ml-lg-4 mr-md-4 mr-xl-5 ml-xl-5">
                        <h3 className="pt-4">Chemistry</h3>
                        <p><img className="cards-img" src="image/Chemistry3D.png" alt="" /></p>
                        <h4 className="">RS 199</h4>
                        <p className="pa">Digital Copies accessible from any mobile device.</p>
                        <div className="d-flex flex-row justify-content-center ">
                            <div id="razorPayBtnch" className="btn-card">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-plans">
                    <div className="card-box ml-lg-4 mr-md-4 mr-xl-5 ml-xl-5">
                        <h3 className="pt-4">Biology</h3>
                        <p><img className="cards-img" src="image/Biology3D.png" alt="" /></p>
                        <h4 className="">RS 199</h4>
                        <p className="pa">Digital Copies accessible from any mobile device.</p>
                        <div className="d-flex flex-row justify-content-center ">
                            <div id="razorPayBtnbio" className="btn-card">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-plans">
                    <div className="card-box ml-lg-4 ml-xl-5">
                        <h3 className="pt-4">Bundle</h3>
                        <p><img className="cards-img" src="image/Bundle.png" alt="" /></p>
                        <h4 className="">RS 299</h4>
                        <p className="pa">Digital Copies accessible from any mobile device.</p>
                        <div className="d-flex flex-row justify-content-center">
                            <div id="razorPayBtnbun" className="btn-card">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Plans
