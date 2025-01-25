import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import signImg from '../assets/dl.beatsnoop 1.png';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './Footer';

const SignUp = () => {
  const [signed, setSigned] = useState(false);
  const [userData, setUserData] = useState({ userName: '', userEmail: '', userPass: '' }); // State to hold user data
  const [errors, setErrors] = useState({ userName: '', userEmail: '', userPass: '' }); // State to hold validation errors

  // Function to validate the form data
  const validateForm = () => {
    let isValid = true;
    let newErrors = { userEmail: '', userPass: '' };


    if (!userData.userName) {
      newErrors.userName = 'Name is required';
      isValid = false;
    }

    // Validate email field with regex pattern
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!userData.userEmail || !emailPattern.test(userData.userEmail)) {
      newErrors.userEmail = 'Invalid email address';
      isValid = false;
    }

    if (!userData.userPass || userData.userPass.length < 6) {
      newErrors.userPass = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log('Email:', userData.userEmail);
    console.log('Password:', userData.userPass);

    // Save user data to localStorage and update the signed state
    setSigned(true);
    localStorage.setItem('isSignedUp', 'true');
    localStorage.setItem('userData', JSON.stringify(userData));
  };


  if (signed) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <img className="w-100 h-100" src={signImg} alt="Sign-up-illustration" />
        </div>
        <div className="col-md-6 col-sm-12 align-content-center my-5">
          <form className="d-grid gap-3 justify-content-center" onSubmit={handleSubmit}>
            <h1>Create an account</h1>
            <p>Enter your details below</p>

            <input
              type="text"
              placeholder="Name"
              className="border-0 border-bottom border-1 border-black"
              style={{ lineHeight: '3rem', outline: 'none' }}
              value={userData.userName}
              onChange={(e) => setUserData({ ...userData, userName: e.target.value })}
            />
            {errors.userName && <p className="text-danger">{errors.userName}</p>} {/* Show error for name */}


            <input
              type="email"
              placeholder="Email or Phone Number"
              className="border-0 border-bottom border-1 border-black"
              style={{ lineHeight: '3rem', outline: 'none' }}
              value={userData.userEmail}
              onChange={(e) => setUserData({ ...userData, userEmail: e.target.value })}
            />
            {errors.userEmail && <p className="text-danger">{errors.userEmail}</p>} {/* Show error for email */}


            <input
              type="password"
              placeholder="Password"
              className="border-0 border-bottom border-1 border-black"
              style={{ lineHeight: '3rem', outline: 'none' }}
              value={userData.userPass}
              onChange={(e) => setUserData({ ...userData, userPass: e.target.value })}
            />
            {errors.userPass && <p className="text-danger">{errors.userPass}</p>} {/* Show error for password */}

            <div className="d-grid gap-3 align-items-baseline">

              <button className="btn btn-danger p-2 px-4" type="submit">
                Create Account
              </button>


              <button
                type="button"
                className="btn border border-2 p-2 px-4 d-flex gap-4 justify-content-center align-items-center"
              >
                <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>Sign up with Google
              </button>

              {/* Link to login page */}
              <div className="d-flex justify-content-center gap-2">
                <p className="text-black-50">Already have an account?</p>
                <Link className="text-black text-decoration-none" to="/login">
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer /> {/* Footer component */}
    </>
  );
};

export default SignUp;
