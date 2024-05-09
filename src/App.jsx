import { useRef, useState } from "react";
import "./App.css";
import BackgroundChanger from "./Components/Background Changer/BackgroundChanger";
import Header from "./Components/Header/Header";
import TopHeader from "./Components/Header/TopHeader";
import Form  from "./Components/Form/Form";

let arr = ["Red", "Blue", "Green", "Yellow", "Cyan", "Orange", "Bisque", "Gray"];

let arr2 = [
  {
    title: "grow ajfoi",
    price: 50,
    star: 5,
    lesssons: 8,
    students: 29,
  },
  {
    title: "grow ajfoi",
    price: 50,
    star: 5,
    lesssons: 8,
    students: 29,
  },{
    title: "grow ajfoi",
    price: 50,
    star: 5,
    lesssons: 8,
    students: 29,
  },
  {
    title: "grow ajfoi",
    price: 50,
    star: 5,
    lesssons: 8,
    students: 29,
  },
  {
    title: "grow ajfoi",
    price: 50,
    star: 5,
    lesssons: 8,
    students: 29,
  },
  {
    title: "grow awdawdajfoi",
    price: 500,
    star: 5,
    lesssons: 18,
    students: 29,
  },
  {
    title: "gasdawrow ajfoi",
    price: 150,
    star: 5,
    lesssons: 28,
    students: 29,
  },{
    title: "grawdawow ajfoi",
    price: 50,
    star: 5,
    lesssons: 8,
    students: 29,
  },
  {
    title: "phoil",
    price: 500,
    star: 4,
    lesssons: 18,
    students: 209,
  },
  {
    title: "grow ajfoi",
    price: 50,
    star: 5,
    lesssons: 8,
    students: 29,
  },
  {
    title: "phoil",
    price: 500,
    star: 4,
    lesssons: 18,
    students: 209,
  },
];

function App() {
  let [currentClr, setCurrentClr] = useState("Black");

  function getBG(e) {
    setCurrentClr(e.target.innerText);
  }

  return (
    <>
      <TopHeader />
      <Header />
      <center><h1 className="text-3xl">Courses</h1></center>
      <div className="Container h-[fit-content] flex gap-2 overflow-x-auto">
        
        {arr2.map((e) => {
            return (
              <div className=" Card h-[150px] w-[300px] bg-slate-600 mt-2 text-white">
                <h1 className="text-3xl text-black">{e.title}</h1>
                <h4>₹{e.price} </h4>
                <p>star:{e.star}</p>
              </div>
            );
        })}
      </div>
      <center>
        {arr.map((element) => {
          return <BackgroundChanger getData={getBG} currentColor={element} />;
        })}
        <div
          style={{
            backgroundColor: currentClr,
            height: "300px",
            width: "100%",
          }}
        ></div>
      </center>

      <center>
        <Form />
      </center>
    </>
  );
}

export default App;
