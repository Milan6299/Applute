import React, { useRef, useState } from "react";

export default function Form() {
  let [nstate, setNState] = useState("");
  let [pstate, setPState] = useState("");

  let [sname, setSName] = useState("");
  let [spass, setSPass] = useState("");

  let nameRef = useRef();
  let passRef = useRef();

  function handleClick() {
    setSName(nameRef.current.value);
    setSPass(passRef.current.value);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center my-5 py-10 min-[400px]:w-[350px] max-[400px]:w-[320px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <div className="SignUp">
          <h1 className="max-[400px]:text-2xl text-3xl sm:text-3xl font-bold">Sign Up</h1>
          <p className="mt-5 max-[400px]:text-sm ">
            Let's get started with your 30 days free trial
          </p>
        </div>

        <div className="max-[400px]:w-[65%] max-[400px]:mt-7  mt-10 max-w-[450px] flex flex-col gap-3 items-center">
          <input
            className="w-full rounded-md h-8 px-1 outline-none focus:border-[2px] focus:border-green-500"
            type="name"
            placeholder="Name"
            value={nstate}
            onChange={(e) => setNState(e.target.value)}
            ref={nameRef}
          />
          <input
            className="w-full rounded-md h-8 px-1 outline-none focus:border-[2px] focus:border-green-500"
            type="Password"
            placeholder="Password"
            value={pstate}
            onChange={(e) => setPState(e.target.value)}
            ref={passRef}
          />
          <button
            className="signup font-medium shadow-lg text-m w-full h-8 mt-3 rounded-md bg-green-500 text-white"
            onClick={handleClick}
          >
            Submit
          </button>
          <h1 className="max-[400px]:text-sm">Check the input <span className=" text-blue-600 font-medium">details</span> below!</h1>
          <h3 className="mt-3 font-semibold">Name : {sname}</h3>
          <h3 className="font-semibold">Password : {spass}</h3>
        </div>
      </div>
    </>
  );
}
