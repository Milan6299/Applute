import "./Background.css"

export default function BackgroundChanger({ getData, currentColor }) {
  return (
    <button className=" ml-5 p-2 shadow mt-10" onClick={getData}>
      {currentColor}
    </button>
  );
}

