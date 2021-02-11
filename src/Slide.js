import './App.css';


function Slide(props) {
  const {id, img, slideHeader, slideSubHeaders} = props.val

  return (
    <div className="Slide">
      <img src={img} />
      <div className="Slide-Header">{slideHeader}</div>
      <div className="Slide-Subheaders">
        <div className="Slide-Subheader-Normal">{slideSubHeaders ? slideSubHeaders[0]: <></>}</div>
        <div className="Slide-Subheader-Normal">{slideSubHeaders ? slideSubHeaders[1]: <></>}</div>
        <div className="Slide-Subheader-Normal">{slideSubHeaders ? slideSubHeaders[2] :<></>}</div>
      </div>
      <button className="Learn-More">Learn More</button>
    </div>
  );
}

export default Slide;
