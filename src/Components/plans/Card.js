import React from 'react'

function Card() {
    return (
        <div>
             <div className="box-footer d-flex flex-row  ml-5">
                    <div className="icon d-flex flex-row justify-content-center">
                        <i className="fa-solid fa-info mt-3"></i>
                    </div>
                    <div className="paragraph-box ml-2">
                        <div className="d-flex flex-row ">
                            <i className="fa-solid fa-star star"></i>
                            <i className="fa-solid fa-star star"></i>
                            <i className="fa-solid fa-star star"></i>
                            <i className="fa-solid fa-star star"></i>
                        </div>
                        <p className="grey mt-2">This is required when, for text is not yet available
                            This is required when, for text is not yet available</p>
                        <p><span className="blue">-carl</span> oliver P.A</p>
                    </div>
                </div>

        </div>
    )
}

export default Card
