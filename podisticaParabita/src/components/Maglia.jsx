import maglia from '../assets/maglia.png';


function Maglia() {
  return (
   <div className="hover-3d">
    {/* content */}
    <figure className="max-w-100 rounded-2xl">
        <img src={maglia} alt="3D card" />
    </figure>
    {/* 8 empty divs needed for the 3D effect */}
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    </div>
  );
}

export default Maglia;