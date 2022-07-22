import React from 'react'
import '../../Components/sale/Sale.scss';

function Sale() {
    return (

        <div className="bodycenter-sectiontwo d-lg-flex flex-row d-md-flex justify-content-lg-center justify-content-md-center  ">

            <div id="carouselsale" className="carousel slide d-block d-sm-block d-md-block d-lg-none mt-5 " data-ride="carousel" >
                {/* <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol> */}
                <div className="carousel-inner ">

                    <div className="carousel-item active">
                        <div className="boxes">
                            <div className="box d-flex flex-row mr-md-3 mt-xs-5">
                                <div className="icon-box d-flex flex-row justify-content-center mt-2">
                                    <img className="img-fluid " src="image/ExperiencedFaculty.png" alt="" />
                                </div>
                                <div className="paragraph-box ml-2">
                                    <h6 className="">Experienced Faculty</h6>
                                    <p className="grey">Short notes that fit your pocket, crafted by experts from the domain with over 40 years experience.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item ">
                        <div className="boxes">
                            <div className="box d-flex flex-row mr-md-3 ">
                                <div className="icon-box d-flex flex-row  justify-content-center mt-2">
                                    <img className="img-fluid " src="image/InnovativeContent.png" alt="" />
                                </div>
                                <div className="paragraph-box ml-2">
                                    <h6>Innovative Content</h6>
                                    <p className="grey">Meticulously crafted with the aim to assist aspirants make their study more efficient</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item ">
                        <div className="boxes">
                            <div className="box d-flex flex-row mr-md-3 ">
                                <div className="icon-box d-flex flex-row  justify-content-center mt-2">
                                    <img className="img-fluid " src="image/allinoneMaterials.png" alt="" />
                                </div>
                                <div className="paragraph-box ml-2">
                                    <h6>All-in-one Material:</h6>
                                    <p className="grey">Content that covers all core content from physics, chemistry, botany and zoology.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="carousel-item ">
                        <div className="boxes">
                            <div className="box d-flex flex-row  mr-lg-5 mr-md-3">
                                <div className="icon-box d-flex flex-row justify-content-center mt-2">
                                    <img className="img-fluid " src="image/SimplifiedSolution.png" alt="" />
                                </div>
                                <div className="paragraph-box ml-2">
                                    <h6>Simplified Solutions:</h6>
                                    <p className="grey">Every chapter is covered in no more than 3 pages to ensure quick revisions.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item ">
                        <div className="boxes">
                            <div className="box d-flex flex-row ">
                                <div className="icon-box d-flex flex-row  justify-content-center mt-2">
                                    <img className="img-fluid " src="image/SaveMorethan50.png" alt="" />
                                </div>
                                <div className="paragraph-box ml-2">
                                    <h6>Save more than 50% :</h6>
                                    <p className="grey">Cut short your prep time in half and master various tricks and tips to optimise your learning efforts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselsale" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselsale" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>

            </div>

            <div id="carouselsale2" className="carousel slide d-none d-sm-none d-md-none d-lg-block line mt-5 pt-5" data-ride="carousel" >
                {/* <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol> */}
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <div className="boxes">
                            <div className="box d-flex flex-row mr-md-3 mt-xs-5">
                                <div className="icon-box d-flex flex-row justify-content-center mt-2">
                                    <img className="img-fluid " src="image/ExperiencedFaculty.png" alt="" />
                                </div>
                                <div className="paragraph-box ml-2">
                                    <h6 className="">Experienced Faculty</h6>
                                    <p className="grey">Short notes that fit your pocket, crafted by experts from the domain with over 40 years experience.</p>
                                </div>
                            </div>

                            <div className="box d-flex flex-row mr-md-3 ">
                                <div className="icon-box d-flex flex-row  justify-content-center mt-2">
                                    <img className="img-fluid " src="image/InnovativeContent.png" alt="" />
                                </div>
                                <div className="paragraph-box ml-2">
                                    <h6>Innovative Content</h6>
                                    <p className="grey">Meticulously crafted with the aim to assist aspirants make their study more efficient</p>
                                </div>
                            </div>

                            <div className="box d-flex flex-row mr-md-3 ">
                                <div className="icon-box d-flex flex-row  justify-content-center mt-2">
                                    <img className="img-fluid " src="image/AllinoneMaterials.png" alt="" />
                                </div>
                                <div className="paragraph-box ml-2">
                                    <h6>All-in-one Material:</h6>
                                    <p className="grey">Content that covers all core content from physics, chemistry, botany and zoology.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item ">
                        <div className="boxes">
                            <div className="box d-flex flex-row  mr-lg-5 mr-md-3">
                                <div className="icon-box d-flex flex-row justify-content-center mt-2">
                                    <img className="img-fluid " src="image/SimplifiedSolution.png" alt="" />
                                </div>
                                <div className="paragraph-box ml-2">
                                    <h6>Simplified Solutions:</h6>
                                    <p className="grey">Every chapter is covered in no more than 3 pages to ensure quick revisions.</p>
                                </div>
                            </div>

                            <div className="box d-flex flex-row ">
                                <div className="icon-box d-flex flex-row  justify-content-center mt-2">
                                    <img className="img-fluid " src="image/SaveMorethan50.png" alt="" />
                                </div>
                                <div className="paragraph-box ml-2">
                                    <h6>Save more than 50% :</h6>
                                    <p className="grey">Cut short your prep time in half and master various tricks and tips to optimise your learning efforts.</p>
                                </div>
                            </div>
                            <div className="box d-flex flex-row mr-md-3 mt-xs-5">
                                <div className="icon-box d-flex flex-row justify-content-center mt-2">
                                    <img className="img-fluid " src="image/ExperiencedFaculty.png" alt="" />
                                </div>
                                <div className="paragraph-box ml-2">
                                    <h6 className="">Experienced Faculty</h6>
                                    <p className="grey">Short notes that fit your pocket, crafted by experts from the domain with over 40 years experience.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <a className="carousel-control-prev" href="#carouselsale2" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselsale2" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <img className="img-dot img-fluid ml-5 pl-5 d-none d-sm-none d-md-none d-lg-block" src="image/Dot2.png" alt="" />
        </div >


    )
}

export default Sale
