import { Link } from "react-router-dom"
import Footer from "./Footer"


const NotFound = () => {
  return (
    <>
        {/* Billing Details */}
      <div className="d-flex  justify-content-center w-25 my-5 ">
        <h4 className=" text-black-50">Home \</h4> <h4>404</h4>
      </div>
<div className="d-grid gap-5 p-5 m h-100 justify-content-center text-center "

>
    <h1 style={{fontSize:'5rem'}}>404 Not Found</h1>
    <p>Your visited page not found. You may go home page.</p>
<Link className="btn w-50 p-3 m-auto btn-danger" to="/" > Back to home page </Link>
</div>
      <Footer/>
    </>
  )
}

export default NotFound
