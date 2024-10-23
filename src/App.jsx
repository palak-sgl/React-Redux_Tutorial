import { useDispatch, useSelector } from "react-redux";
import { increment } from "./features/counter/counterSlice";
function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(increment());
  }
  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <p>count: {count}</p>
    </>
  );
}
export default App;

// import UserContextProvider from "./context/UserContextProvider";
// import Login from "./components/Login";
// import Profile from "./components/Profile";

// function App() {
//   return (
//     <UserContextProvider>
//       <h1>Context API</h1>
//       <Login />
//       <Profile />
//     </UserContextProvider>
//   );
// }
// export default App;

//CODEHELP:

//step1:

// import { useState, createContext } from "react";
// import React from "react";
// import ChildA from "./components/ChildA";

// const ThemeContext = createContext();
// function App() {
//   const [theme, setTheme] = useState("light");
//   return (
//     //step2:
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       <div
//         className="h-32 w-32 border border-slate-300 flex justify-center items-center bg-slate-50 flex-col "
//         style={{ bg: theme === "light" ? "white" : "black" }}
//       >
//         <ChildA />
//         <h1>dsks</h1>
//       </div>
//     </ThemeContext.Provider>
//   );
// }

// export default App;
// export { ThemeContext };
