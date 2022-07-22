import React from 'react'
// import './Section.scss';
import '../../Components/book/Book.scss';

function Book() {

    return (
        <div id="books" className="sectiontwo">
            <div className=" d-flex flex-row  justify-content-center pt-5 header ">
                <button data-target="#carouselExample" data-slide-to="0" className="btn-sectiontwo" >Chemistry</button >
                <button data-target="#carouselExample" data-slide-to="1" className="btn-sectiontwo" >Biology</button >
                <button data-target="#carouselExample" data-slide-to="2" className="btn-sectiontwo" >Physics</button >

            </div>

            <div id="carouselExample" className="carousel slide" data-interval="false" >
                {/* <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol> */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="body-setiontwo flex-row d-lg-flex d-md-flex justify-content-lg-center justify-content-md-center ">
                            <div className="body-setiontwo-left flex-row  d-lg-flex d-md-flex justify-content-lg-end justify-content-md-end">
                                <img className="book pt-5 img-fluid" src="image/Chemistry3D.png" alt="" />
                            </div>
                            <div className="body-sectiontwo-right flex-row  d-lg-flex justify-content-lg-start">
                                <div className="book-info">
                                    <h1 className="pt-lg-5">Chemistry</h1>
                                    <p className="p pt-2 pt-lg-3">Prepared meticulously by KOTA’s top faculty to ensure high yielding results:</p>
                                    <p className="p pt-lg-3"><i className="fa-solid fa-check-double blue"></i>  Covers fundamentals till all core concepts</p>
                                    <p className="p"><i className="fa-solid fa-check-double blue"></i>  Over 300 solved questions from both organic and inorganic chemistry. </p>
                                    <p className="p"><i className="fa-solid fa-check-double blue"></i>  Complete formula and cheat sheet attached</p><br />
                                    <a href="#pricing"><button className="btn-blue ">Buy Now</button ></a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="carousel-item">
                        <div className="body d-lg-flex flex-row  justify-content-lg-center ">
                            <div className="body-setiontwo-left d-lg-flex flex-row  justify-content-lg-end ">
                                <img className="book m-5 img-fluid" src="image/Biology3D.png" alt="" />
                            </div>
                            <div className="body-sectiontwo-right d-lg-flex flex-row  justify-content-lg-start">
                                <div className="book-info">
                                    <h1 className="pt-lg-5">Biology</h1>
                                    <p className="p pt-2 pt-lg-3">Prepared meticulously by KOTA’s top faculty to ensure high yielding results:</p>
                                    <p className="p pt-lg-3"><i className="fa-solid fa-check-double blue"></i>  Short notes for quick revisions</p>
                                    <p className="p"><i className="fa-solid fa-check-double blue"></i>  Practical reasoning with diagrams </p>
                                    <p className="p"><i className="fa-solid fa-check-double blue"></i>  Covers all core concepts from Botany & zoology.</p><br />
                                    <a href="#pricing"><button className="btn-blue">Buy Now</button ></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="body d-lg-flex  flex-row justify-content-lg-center ">
                            <div className="body-setiontwo-left d-lg-flex flex-row justify-content-lg-end ">
                                <img className="book m-5 img-fluid" src="image/Physics3D.png" alt="" />
                            </div>
                            <div className="body-sectiontwo-right d-lg-flex flex-row justify-content-lg-start">
                                <div className="book-info">
                                    <h1 className="pt-lg-5">Physics</h1>
                                    <p className="p pt-2 pt-lg-3">Prepared meticulously by KOTA’s top faculty to ensure high yielding results:</p>
                                    <p className="p pt-lg-3"><i className="fa-solid fa-check-double blue"></i>  Chapter wise questions and answers with reasoning</p>
                                    <p className="p"><i className="fa-solid fa-check-double blue"></i>  Over 300 solved questions. </p>
                                    <p className="p"><i className="fa-solid fa-check-double blue"></i>  Chapterwise formulae and shortcuts</p><br />
                                    <a href="#pricing"><button className="btn-blue">Buy Now</button ></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div >

    )
}

export default Book
