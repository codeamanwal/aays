// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate()

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const staticEmail = "user@example.com";
//     const staticPassword = "password123";

//     if (email === staticEmail && password === staticPassword) {
//       console.log("Login successful");
//       navigate(`/overview`)
//     } else {
//       setError("Invalid email or password");
//     }

//     /*
//     fetch("https://your-api-endpoint.com/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.success) {
//           console.log("Login successful");
//           // Proceed to dashboard or other authenticated route
//         } else {
//           setError("Invalid email or password");
//         }
//       })
//       .catch((error) => {
//         console.error("Error during login:", error);
//         setError("An error occurred. Please try again.");
//       });
//     */
//   };

//   return (
//     <div className="flex max-h-screen">
//       {/* Left Side Image */}
//       <div className="w-1/2 bg-blue-900 relative">
//         <img
//           src="/assets/login-bg.png"
//           alt="Brain graphic"
//           className="w-full h-full object-cover opacity-80"
//         />
//         <div className="absolute top-8 left-8">
//           <img
//             src="/assets/logo2.png"
//             alt="AAYS Analytics Logo"
//             className="h-12"
//           />
//         </div>
//       </div>

//       {/* Right Side Form */}
//       <div className="w-1/2 bg-gray-900 flex flex-col justify-center items-center p-10">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-semibold text-[#C730CB] mb-2">
//             Welcome Back 👋
//           </h2>
//           <p className="text-gray-300">
//             Sign in to start managing your projects!
//           </p>
//         </div>
//         <form onSubmit={handleSubmit} className="w-3/4 space-y-6">
//           <div className="rounded-md shadow-sm">
//             <div className="mb-4">
//               <label htmlFor="email-address" className="sr-only">
//                 Email address
//               </label>
//               <input
//                 id="email-address"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-600 placeholder-gray-500 text-gray-200 bg-gray-800 focus:outline-none focus:ring-[#C730CB] focus:border-[#C730CB] sm:text-sm"
//                 placeholder="Email address"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="sr-only">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="current-password"
//                 required
//                 className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-600 placeholder-gray-500 text-gray-200 bg-gray-800 focus:outline-none focus:ring-[#C730CB] focus:border-[#C730CB] sm:text-sm"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//           </div>

//           {error && <p className="text-red-500 text-sm">{error}</p>}

//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#C730CB] hover:bg-[#a214bb] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C730CB]"
//             >
//               Sign in
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;





import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const staticEmail = "user@example.com";
    const staticPassword = "password123";

    if (email === staticEmail && password === staticPassword) {
      console.log("Login successful");
      navigate(`/overview`);
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex md:max-h-screen min-h-screen flex-col md:flex-row">
      {/* Left Side Image */}
      <div className="relative h-48 md:h-auto md:w-1/2 bg-blue-900">
        <img
          src="/assets/login-bg.png"
          alt="Brain graphic"
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute top-4 left-4 md:top-8 md:left-8">
          <img
            src="/assets/logo2.png"
            alt="AAYS Analytics Logo"
            className="h-8 md:h-12"
          />
        </div>
      </div>

      {/* Right Side Form */}
      <div className="flex flex-1  flex-col justify-start  items-center p-6 md:p-10 bg-gray-900 md:w-1/2">
        <div className="w-full max-w-md text-center mt-24  mb-8 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#C730CB] mb-2">
            Welcome Back 👋
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Sign in to start managing your projects!
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 md:space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 md:px-4 md:py-3 border border-gray-600 placeholder-gray-500 text-gray-200 bg-gray-800 focus:outline-none focus:ring-[#C730CB] focus:border-[#C730CB] text-sm md:text-base"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 md:px-4 md:py-3 border border-gray-600 placeholder-gray-500 text-gray-200 bg-gray-800 focus:outline-none focus:ring-[#C730CB] focus:border-[#C730CB] text-sm md:text-base"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-3 md:py-3 md:px-4 border border-transparent text-sm md:text-base font-medium rounded-md text-white bg-[#C730CB] hover:bg-[#a214bb] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C730CB] transition-colors duration-200"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;