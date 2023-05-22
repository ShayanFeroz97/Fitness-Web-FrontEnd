import "./Register.css";
import fitness from "./assets/fitnessimg.png";
import logo from "./assets/logo.png";
import React from "react";

function Register() {
    return (
      <div>
        <div className="main">
          <div className="container">
            <div className="container_form_main">
              <div className="container_form">
                <div className="logo">
                  <img src={logo} alt="" />
                </div>
  
                <br />
                <br />
                <div className="heading">Register</div>
                <br />
                <br />
  
                <input
                  className="name_bar"
                  placeholder="Enter Your Name"
                  type="name"
                  id="name"
                  name="name"
                />

                <br />
                <input
                  className="mail_bar"
                  placeholder="Enter Your Email"
                  type="email"
                  id="email"
                  name="email"
                />
  
                <br />
                <input
                  className="pass_bar"
                  placeholder="Enter Your Password"
                  type="password"
                  id="pwd"
                  name="pwd"
                ></input>
  <br />
  {/* <br /> */}
                <button className="submit_btn">Register</button>
  {/* <br /> */}
  
              </div>
            </div>
            <div className="container_img">
              <img src={fitness} alt="aa"/>
          </div>
            </div>
         </div>
      </div>
    );
  }
  
  export default Register;
  





  // /////////////////////////////////////////////////
//   <div className="container">
//       <div className="row g-0">
//         <div className="col-lg-7">
//           <img
//             src="/images/formimg.jpg"
//             alt=""
//             style={{ width: "100%", height: "100%" }}
//           />
//         </div>

//         <div className="col-lg-5 text-center py-4">
//           <h2 className="animate__animated animate__heartBeat animate__infinite text-primary">
//             Login <LoginIcon fontSize="large" />
//             {/* {console.log("user", user)} */}
//           </h2>
//           <form onSubmit={handleSubmit}>
//             <div className="form-row py-2 pt-5">
//               <div className="col-lg-10 offset-1">
//                 <input
//                   type="email"
//                   className="inp px-3"
//                   placeholder="User Email"
//                   id="email"
//                   name="email"
//                   onChange={(e) => setEmail(e.target.value)}
                  
//                 />
//               </div>
//             </div>
//             <div className="form-row py-2 ">
//               <div className="col-lg-10 offset-1">
//                 <input
//                   type="password"
//                   className="inp  px-3"
//                   placeholder="User Password"
//                   id="password"
//                   name="password"
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//             </div>
//             <div className="form-row py-2 ">
//               <div className="col-lg-10 offset-1">
//                 <button className="btn-one  px-3">Login</button>
//               </div>
//             </div>
//           </form>
//           <Box className="mt-2 d-flex justify-content-center align-items-center">
//             <p>Not a member? <a href=" " style={{ textDecoration: "none" }} onClick={goToSignup}>Signup</a></p>
//           </Box>
//         </div>
//       </div>
//     </div>
//   );
// };

////////////////////////////////////////
// * {
//   padding: 0;
//   margin: 0;
//   box-sizing: border-box;
// }
// .row {
//   background-color: white;
//   box-shadow: 8px 8px 10px;
// }

// .signUp h1 {
//   font-size: 4rem;
//   font-weight: 700;
//   font-family: "Pacifico", cursive;
// }

// .inp {
//   height: 50px;
//   width: 80%;
//   border: none;
//   outline: none;
//   border-radius: 60px;
//   box-shadow: -1px 1px 20px -11px rgba(0, 0, 0, 0.50);
//   -webkit-box-shadow: -1px 1px 20px -11px rgba(0, 0, 0, 0.50);
//   -moz-box-shadow: -1px 1px 20px -11px rgba(0, 0, 0, 0.50);
// }
// .btn-one {
//   height: 50px;
//   width: 80%;
//   border: none;
//   outline: none;
//   border-radius: 60px;
//   font-weight: 700;
//   background-color: rgb(223, 56, 56);
//   color: white;
// }
// .btn-one:hover {
//   background-color: brown;
//   transition: 0.5s;
// }
// .row {
//   width: 80%;
// }

// .container {
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .link {
//   text-decoration: none;
//   cursor: pointer;

// }