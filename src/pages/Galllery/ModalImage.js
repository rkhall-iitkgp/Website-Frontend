import React from "react";
const ModalImage = (props) => {
  const [modal, setModal] = React.useState(false);

  // document.onkeydown = checkKey;

  // function checkKey(e) {
  //   e = e || window.event;
  //   if (e.keyCode == "37") {
  //     props.clickArrow(props.id === 1 ? props.len : props.id - 1);
  //   } else if (e.keyCode == "39") {
  //     props.clickArrow(props.id === props.len ? 1 : props.id + 1);
  //   }
  // }

  function handleClick() {
    // setModal((prev) => !prev);
    if (props.imgview < 0) props.clickArrow(props.id);
    else props.clickArrow(-1);
  }

  return (
    <>
      <img onClick={handleClick} className="eventimage" src={props.url} />
      <div className={`modal ${props.imgview === props.id ? "active" : ""}`}>
        <span onClick={handleClick} className="close">
          &times;
        </span>
        <div className="imagewithbutton">
          <span
            // onKeyDown={() => checkKey(onkeydown)}
            onClick={() =>
              props.clickArrow(props.id === 1 ? props.len : props.id - 1)
            }
            className="prev"
          >
            &#10094;
          </span>
          <img class="modal-content" src={props.url} />
          <span
            // onKeyDown={() => checkKey(onkeydown)}
            onClick={() =>
              props.clickArrow(props.id === props.len ? 1 : props.id + 1)
            }
            className="next"
          >
            &#10095;
          </span>
        </div>
      </div>
    </>
  );
};

export default ModalImage;
