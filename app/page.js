// "use client";
// import { useCallback, useState, useEffect } from "react";

// export default function Home() {
//   const [length, setLength] = useState(6);
//   const [numberAllowed, setNumberAllowed] = useState(false);
//   const [charAllowed, setCharAllowed] = useState(false);
//   const [password, setPassword] = useState("");

//   const generate_Password = useCallback(() => {
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

//     if (numberAllowed) str += "0123456789";
//     if (charAllowed) str += "~!@#$%^&*()-_+={}[]|:;<>,.?/";

//     for (let i = 1; i <= length; i++) {
//       const char = Math.floor(Math.random() * str.length + 1);
//       pass += str.charAt(char);
//     }

//     setPassword(pass);
//   }, [length, numberAllowed, charAllowed, setPassword]);

//   useEffect(() => {
//     generate_Password();
//   }, [length, numberAllowed, charAllowed, generate_Password]);

//   return (
//     <div className="flex items-center h-screen py-8 bg-gray-900">
//       <div className="space-y-4 w-full h-[210px] max-w-md mx-auto px-4 py-5 rounded-xl text-orange-500 bg-gray-700">
//         <div className="flex items-center justify-center flex-col">
//           <h1 className="font-bold text-xl">Password Generator</h1>
//           <div className="">
//             <input
//               type="text"
//               value={password}
//               className="py-2 px-7 rounded-tl-xl rounded-bl-xl outline-none"
//             />
//             <button className="bg-blue-800 py-2 px-7 rounded-tr-xl rounded-br-xl">
//               copy
//             </button>
//           </div>
//         </div>

//         <div className="flex flex-col mx-[25px] gap-3">
//           <div className="flex">
//             <label className="w-28">Length: {length}</label>
//             <input
//               type="range"
//               min={6}
//               max={20}
//               value={length}
//               onChange={(e) => {
//                 setLength(e.target.value);
//               }}
//               className="w-full ml-2 cursor-pointer"
//             />
//           </div>

//           <div>
//             <div>
//               <input
//                 type="checkbox"
//                 value={numberAllowed}
//                 id="numberInput"
//                 onChange={() => {
//                   setNumberAllowed((prev) => !prev);
//                 }}
//                 className="cursor-pointer"
//               />
//               <label htmlFor="numberInput">Number</label>
//             </div>

//             <div>
//               <input
//                 type="checkbox"
//                 value={charAllowed}
//                 id="charInput"
//                 onChange={() => {
//                   setCharAllowed((prev) => !prev);
//                 }}
//                 className="cursor-pointer"
//               />
//               <label htmlFor="charInput">Character</label>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




"use client";
import { useCallback, useState, useEffect } from "react";

export default function Home() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generate_Password = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()-_+={}[]|:;<>,.?/";

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    generate_Password();
  }, [length, numberAllowed, charAllowed, generate_Password]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password).then(() => {
      alert("Password copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
  };

  return (
    <div className="flex items-center h-screen py-8 bg-gray-900">
      <div className="space-y-4 w-full h-[210px] max-w-md mx-auto px-4 py-5 rounded-xl text-orange-500 bg-gray-700">
        <div className="flex items-center justify-center flex-col">
          <h1 className="font-bold text-xl">Password Generator</h1>
          <div className="flex">
            <input
              type="text"
              value={password}
              readOnly
              className="py-2 px-7 rounded-tl-xl rounded-bl-xl outline-none bg-gray-800 text-white"
            />
            <button 
              className="bg-blue-800 py-2 px-7 rounded-tr-xl rounded-br-xl text-white hover:bg-blue-700"
              onClick={copyToClipboard}
            >
              Copy
            </button>
          </div>
        </div>

        <div className="flex flex-col mx-[25px] gap-3">
          <div className="flex">
            <label className="w-28 text-white">Length: {length}</label>
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              onChange={(e) => {
                setLength(Number(e.target.value));
              }}
              className="w-full ml-2 cursor-pointer"
            />
          </div>

          <div>
            <div>
              <input
                type="checkbox"
                checked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
                className="cursor-pointer"
              />
              <label htmlFor="numberInput" className="text-white">Include Numbers</label>
            </div>

            <div>
              <input
                type="checkbox"
                checked={charAllowed}
                id="charInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
                className="cursor-pointer"
              />
              <label htmlFor="charInput" className="text-white">Include Characters</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
