import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate, Navigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      {/* Login page */}
      <div className="bg-black text-white flex flex-col min-h-screen">
        {/* Main */}
        <div className=" flex flex-col px-10 py-5 items-center gap-5 ">
          {/* Instagram Heading */}
          <div
            className=" w-full flex items-center justify-center h-15 cursor-pointer "
            
          >
            <h1 className="text-4xl satisfy-regular ">Unstagram</h1>
          </div>
          {/* Input section */}
          <div className="flex flex-col  w-full h-55 p-2 items-center justify-center">
            <div className="flex flex-col gap-3 w-full ">
              <input
                className="bg-[25292E] border border-gray-100 h-12 rounded p-2"
                type="text"
                placeholder="Phone number, username, or email"
              />
              <input
                className="bg-[25292E] border border-gray-100 h-12 rounded p-2"
                type="text"
                placeholder="Password"
              />
            </div>
            <button className="h-12 bg-blue-500 text-white w-full rounded my-5 ">
              Log In
            </button>
          </div>
          {/* This for separating  */}
          <div className="flex w-full items-center gap-2">
            <div className=" h-[1px] bg-gray-500 w-full"></div>
            <h1>OR</h1>
            <div className=" h-[1px] bg-gray-500 w-full"></div>
          </div>
          {/* Facebook login */}
          <div className="flex  w-full flex-col items-center gap-3">
            <div className="flex h-20 items-center gap-5">
              <div>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> */}
              </div>
              <h4 className="text-blue-500 ">Log in with Facebook</h4>
            </div>
            <div className="">
              <h3>Forgor Password?</h3>
            </div>
          </div>
          {/* Loging with google  */}
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(jwtDecode(credentialResponse.credential));
              localStorage.setItem("isLoggedIn", true);
              navigate("/");
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            auto_select={true}
          />
          ;{/* Don't have an account? */}
          <div className=" w-full flex items-center justify-center h-15">
            <h1>
              Don't have an account? <a href="#">Sign up</a>
            </h1>
          </div>
        </div>
        {/* Footer */}
        <footer className="flex flex-col items-center gap-5 mt-20  ">
          <div className="flex gap-5 flex-wrap justify-center items-center text-gray-300 px-10">
            <div>Mota</div>``
            <div>Mota</div>
            <div>Mota</div>
            <div>Mota</div>
            <div>Mota</div>
            <div>Mota</div>
            <div>Mota</div>
            <div>Mota</div>
            <div>Mota</div>
            <div>Mota</div>
          </div>
          <div className="flex gap-5">
            <h1>English</h1>
            <h4>2026 Unstagram from Mota</h4>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Login;
