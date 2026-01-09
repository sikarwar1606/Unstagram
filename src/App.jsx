import React from "react";

const App = () => {
  return (
    <div>
      {/* Login page */}
      <div className="bg-black text-white flex flex-col min-h-screen">
        {/* Main */}
        <div className="border border-white flex flex-col px-10 py-5 items-center gap-5 ">
          {/* Instagram Heading */}
          <div className="border border-red-300 w-full flex items-center justify-center h-15">
            <h1 className="text-4xl">Unstagram</h1>
          </div>
          {/* Input section */}
          <div className="flex flex-col border border-orange-300 w-full h-55 p-2 items-center justify-center">
            <div className="flex flex-col gap-3 w-full ">
              <input
              className="bg-gray-600 border border-gray-100 h-12 rounded p-2"
                type="text"
                placeholder="Phone number, username, or email"
              />
              <input className="bg-gray-600 border border-gray-100 h-12 rounded p-2" type="text" placeholder="Password" />
            </div>
            <button className="h-12 bg-blue-500 text-white w-full rounded my-5 ">Log In</button>
          </div>
          {/* This for separating  */}
          <div className="flex w-full items-center gap-2">
            <div className="h-[1px] bg-gray-500 w-full"></div>
            <h1>OR</h1>
            <div className="h-[1px] bg-gray-500 w-full"></div>
          </div>
          {/* Facebook login */}
          <div className="flex border border-green-300 w-full flex-col items-center gap-3">
            <div>
              <div>F</div>
              <h4>Log in with Facebook</h4>
            </div>
            <div>
              <h3>Forgor Password?</h3>
            </div>
          </div>
          {/* Don't have an account? */}
          <div>
            <h1>
              Don't have an account? <a href="#">Sign up</a>
            </h1>
          </div>
        </div>
        {/* Footer */}
        <footer>
          <div className="flex p-2 gap-2 overflow">
            <div>Mota</div>
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
          <div>
            <h1>English</h1>
            <h4>2026 Unstagram from Mota</h4>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
