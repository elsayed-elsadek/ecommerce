import { useState, useEffect, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import signImg from '../assets/dl.beatsnoop 1.png';
import Footer from './Footer';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const savedUser = JSON.parse(localStorage.getItem('userData'));


  useEffect(() => {
    console.log(savedUser);
  }, []);

  // Handle login form submission
  const handelLoginForm = (e) => {
    e.preventDefault();


    if (
      savedUser?.userEmail === emailRef.current.value &&
      savedUser?.userPass === passwordRef.current.value
    ) {
      console.log('Login successful');
      setIsLoggedIn(true);
    } else {
      alert('User Name or Password is incorrect');
      emailRef.current.value = '';
      passwordRef.current.value = '';
    }
  };


  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <img className="w-100 h-100" src={signImg} alt="SignUpIllustration" />
        </div>
        <div className="col-md-6 col-sm-12 align-content-center my-5">
          <form
            className="d-grid gap-3 justify-content-center"
            onSubmit={handelLoginForm}
          >
            <h1>Log in to Exclusive</h1>
            <p>Enter your details below</p>


            <input
              type="email"
              placeholder="Email or Phone Number"
              required
              className="border-0 border-bottom border-1 border-black"
              style={{ lineHeight: '3rem', outline: 'none' }}
              ref={emailRef}
            />


            <input
              type="password"
              placeholder="Password"
              required
              className="border-0 border-bottom border-1 border-black"
              style={{ lineHeight: '3rem', outline: 'none' }}
              ref={passwordRef}
            />


            <div className="d-flex justify-content-between align-items-baseline">
              <button className="btn btn-danger p-2 px-4" type="submit">
                Log In
              </button>
              <p className="text-danger">Forgot Password?</p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
