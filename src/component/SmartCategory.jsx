import { faPhone, faComputer, faClock, faCamera, faHeadphones, faGamepad } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const SmartCategory = () => {
  return (
    <>
      <div className="categories my-5 pb-5 border-bottom">
        <div className="container">
          <h3 className="text-danger d-flex align-items-center gap-3">
            <span className="bg-danger d-block rounded-1" style={{ width: '20px', height: '50px', backgroundColor: 'red' }}></span>
            Categories</h3>
          <h2 className=" fw-semibold my-3 mb-5 ">Browse By Category</h2>

          <div className="row gap-5 justify-content-center">

            <div className="col-md-2 col-sm-4 border border-2 rounded-2
 d-flex justify-content-center align-items-center"
              style={{ width: '180px', height: '150px' }}>
              <div className="">
                <FontAwesomeIcon className="w-100 fs-2 my-3" icon={faPhone} />
                <p>Phones</p>
              </div>
            </div>


            <div className="col-md-2 col-sm-4 border border-2 rounded-2
 d-flex justify-content-center align-items-center"
              style={{ width: '180px', height: '150px' }}>
              <div className="">
                <FontAwesomeIcon className="w-100 fs-2 my-3" icon={faComputer} />
                <p>Computers</p>
              </div>
            </div>



            <div className="col-md-2 col-sm-4 border border-2 rounded-2
 d-flex justify-content-center align-items-center"
              style={{ width: '180px', height: '150px' }}>
              <div className="">
                <FontAwesomeIcon className="w-100 fs-2 my-3" icon={faClock} />
                <p>Smart Watch</p>
              </div>
            </div>

            <div className="col-md-2 col-sm-4 border border-2 rounded-2
  d-flex justify-content-center align-items-center bg-danger"
              style={{ width: '180px', height: '150px' }}>
              <div className="text-light">
                <FontAwesomeIcon className="w-100 fs-2 my-3" icon={faCamera} />
                <p>Cameras</p>
              </div>
            </div>


            <div className="col-md-2 col-sm-4 border border-2 rounded-2
   d-flex justify-content-center align-items-center"
              style={{ width: '180px', height: '150px' }}>
              <div className="">
                <FontAwesomeIcon className="w-100 fs-2 my-3" icon={faHeadphones} />
                <p>Phones</p>
              </div>
            </div>



            <div className="col-md-2 col-sm-4 border border-2 rounded-2
 d-flex justify-content-center align-items-center"
              style={{ width: '180px', height: '150px' }}>
              <div className="">
                <FontAwesomeIcon className="w-100 fs-2 my-3" icon={faGamepad} />
                <p>Phones</p>
              </div>
            </div>





          </div>

        </div>
      </div>
    </>
  )
}

export default SmartCategory
