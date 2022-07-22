import React from 'react'
import '../../Components/whychoose/WhyChoose.scss';

function WhyChoose() {
    return (

        <div id="why choose us" className="body d-md-flex flex-row   justify-content-md-center  mb-5">
            <div className="bodyend-left-sectiontwo d-lg-flex d-md-flex flex-row  justify-content-lg-end  justify-content-md-start  ">
                <div className="boxes">
                    <div className="box-left pt-lg-5">
                        <h1> Why choose POCKET NOTES? </h1>
                        <p className="grey">Pocket notes’s special NEET 2021 short notes are specially curated by domain experts with over 40 years of experience to help students prepare and master topics from Physics, chemistry, botany & zoology with ease. With our content, revisions can be made quickly under 30 minutes*.</p>
                        <div className="box-inside pt-3">
                            <div className="box-row d-flex flex-row  justify-content-start">
                                <img className="img-fluid notes-box1 mr-3" src="image/ChapterWise.png" alt="" />
                                <div>
                                    <h6 className="font-h"> Chapter wise question banks</h6>
                                    <p className="grey">Questions are sorted chapter wise with formulae and frequently asked questions attached in the end</p>
                                </div>
                            </div>
                            <div className="box-row d-flex flex-row  justify-content-start">
                                <img className="img-fluid notes-box1 mr-3" src="image/ExamGuidence.png" alt="" />
                                <div>
                                    <h6 className="font-h">Exam Guidance:</h6>
                                    <p className="grey">Learn all tips, tricks and all fast ways to solve problems and ace the NEET 2021 entrance exam.</p>
                                </div>
                            </div>
                            <div className="box-row d-flex  flex-row justify-content-start">
                                <img className="img-fluid notes-box1 mr-3" src="image/assuredHighScore.png" alt="" />
                                <div>
                                    <h6 className="font-h">Assured High Scores:</h6>
                                    <p className="grey">Over 145 questions from this series were asked in NEET 2020 entrance exam.</p>
                                </div>
                            </div>
                            <div className="box-row d-flex flex-row justify-content-start ">
                                <img className="img-fluid notes-box1 mr-3" src="image/FRAME0to100.png" alt="" />
                                <div>
                                    <h6 className="font-h">0-100 in 20 days:</h6>
                                    <p className="grey">Master all concepts and questions with only our notes and score above 600.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <div className="bodyend-right-sectiontwo d-lg-flex flex-row  justify-content-lg-start pt-5">
                    <div className="boxes">
                        <div className="box-right ">
                            <div className="d-flex flex-row justify-content-center">
                                <img className="img-fluid logo-bottom " src="image/20943657.png" alt="" />
                            </div>
                            <div className="d-flex flex-row  justify-content-center pt-2">
                                <h5> Overall <span className="blue">10000 +</span> Download</h5>
                            </div>
                            <div className="d-flex flex-row justify-content-center pt-2">
                                <p className="grey">Trusted by more than 10,000 students for their NEET 2020 last minute & quick preparations.</p>
                            </div>
                        </div>
                    </div>
                </div>

        </div>

    )
}

export default WhyChoose
