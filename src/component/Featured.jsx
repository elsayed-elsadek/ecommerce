import psImg from "../assets/ps.png";
import speakerImg from "../assets/speaker.png";
import perfumeImg from "../assets/perfume.png";
import womenImg from "../assets/women.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDonate, faHeadphones, faTruck } from "@fortawesome/free-solid-svg-icons";


const Featured = () => {
    return (
        <>
            {/* new arrival */}
            <div className="featured">
                <div className="container">
                    <h3 className="text-danger d-flex align-items-center gap-3 my-3">
                        <span className="bg-danger d-block rounded-1" style={{ width: '20px', height: '50px', backgroundColor: 'red' }}></span>
                        Featured</h3>
                    <h2>New Arrival</h2>

                    <div className="row my-5 position-relative">
                        {/* PlayStation Section */}
                        <div className="col-md-6 col-sm-12 bg-black p-2 mb-5 rounded-2">
                            <img src={psImg} className="w-100" alt="psImg" />
                        </div>
                        <div
                            className="psDetails position-absolute text-light p-4 w-50"
                            style={{ bottom: "10%", zIndex: "1000" }}
                        >
                            <h5>PlayStation 5</h5>
                            <p>Black and White version of the PS5 <br /> coming out on sale.</p>
                            <Link to="/allproducts" className="text-light">
                                Shop Now
                            </Link>
                        </div>

                        {/* Women's Collection Section */}
                        <div className="col-md-6 col-sm-12">
                            <img
                                src={womenImg}
                                className="w-100 rounded-2"
                                alt="womenImg"
                                style={{ minHeight: "15rem" }}
                            />
                            <div
                                className="womenDetails position-absolute text-light p-4"
                                style={{ bottom: "45%", zIndex: "1000" }}
                            >
                                <h5>Women’s Collections</h5>
                                <p>
                                    Featured woman collections that <br /> give you another vibe.
                                </p>
                                <Link to="/allproducts" className="text-light">
                                    Shop Now
                                </Link>
                            </div>

                            {/* Featured Products Section */}
                            <div
                                className="d-flex flex-column flex-md-row gap-2 my-3 justify-content-between"
                                style={{ height: "37%" }}
                            >
                                <div className="w-100 w-md-50 bg-black text-light rounded-2 p-4">
                                    <img src={speakerImg} className="w-100" alt="speakerImg" />
                                    <div
                                        className="speakerDetails position-absolute"
                                        style={{
                                            bottom: "7%",
                                            left: '51%',
                                            zIndex: "1000",
                                            padding: "inherit",
                                        }}
                                    >
                                        <h5>Speakers</h5>
                                        <p>Amazon wireless <br />speakers</p>
                                        <Link to="/allproducts" className="text-light">
                                            Shop Now
                                        </Link>
                                    </div>
                                </div>

                                <div className="w-100 w-md-50 bg-black text-light rounded-2 p-4">
                                    <img src={perfumeImg} className="w-100" alt="perfumeImg" />
                                    <div
                                        className="perfumDetails position-absolute"
                                        style={{
                                            bottom: "10%",
                                            zIndex: "1000",
                                        }}
                                    >
                                        <h5>Perfume</h5>
                                        <p>GUCCI INTENSE OUD EDP</p>
                                        <Link to="/allproducts" className="text-light">
                                            Shop Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* customer services */}
                    <div className="d-md-flex d-sm-block gap-5 my-5 p-4 justify-content-center text-center">
                        <div className="d-grid">
                            <div className="rounded-circle d-flex justify-content-center mx-auto my-4 " style={{ background: "#C1C0C1", width: "60px", height: "60px" }}>
                                <FontAwesomeIcon icon={faTruck} className="bg-black rounded-circle p-2 m-auto text-light ">
                                </FontAwesomeIcon>
                            </div>
                            <h4 className=" fw-semibold">FREE AND FAST DELIVERY</h4>
                            <p>Free delivery for all orders over $140</p>
                        </div>


                        <div className="d-grid ">
                            <div className=" rounded-circle d-flex justify-content-center  mx-auto my-4 " style={{ background: "#C1C0C1", width: "60px", height: "60px" }} >
                                <FontAwesomeIcon icon={faHeadphones} className="bg-black rounded-circle p-2 m-auto text-light ">
                                </FontAwesomeIcon>
                            </div>
                            <h4 className=" fw-semibold">24/7 CUSTOMER SERVICE</h4>
                            <p>Friendly 24/7 customer support</p>
                        </div>

                        <div className="d-grid ">
                            <div className="rounded-circle d-flex justify-content-center  mx-auto my-4 " style={{ background: "#C1C0C1", width: "60px", height: "60px" }}>
                                <FontAwesomeIcon icon={faDonate} className="bg-black rounded-circle p-2 m-auto text-light ">
                                </FontAwesomeIcon>
                            </div>
                            <h4 className=" fw-semibold">MONEY BACK GUARANTEE</h4>
                            <p>We reurn money within 30 days</p>
                        </div>




                    </div>


                </div>
            </div>
        </>
    )
}

export default Featured
