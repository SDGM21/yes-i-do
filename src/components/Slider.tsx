import { memo } from "react";

const Slider = ({ handler }: { handler(e: any): void }) => {
  return (
    <>
      <ul id="slide-out" className="sidenav">
        <li>
          <div style={{ margin: "auto" }} className="container">
            <button className="btn red" onClick={handler}>
              Logout
            </button>
          </div>
        </li>
      </ul>
    </>
  );
};
const MemoSlider = memo(Slider);
export default MemoSlider;
