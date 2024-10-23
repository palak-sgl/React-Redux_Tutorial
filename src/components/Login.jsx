// import React, { useState, useContext } from "react";
// import UserContext from "../context/UserContext";

// function Login() {
//   const [username, setUsername] = useState("");

//   const { setUser } = useContext(UserContext);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setUser({ username });
//   };
//   return (
//     <div>
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder="username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         className="w-32 border border-gray-700"
//       />
//       <button onClick={handleSubmit} className="ml-4">
//         Submit
//       </button>
//     </div>
//   );
// }

// export default Login;
