import React from "react";

const ModalImage = (props) => {
  const [modal, setModal] = React.useState(false);
  function handleClick(){
    setModal(prev => !prev);
  }
  return (
    <>
      <img onClick={handleClick} className="eventimage" src={props.url} />
      <div className={`modal ${modal ? "active" : ""}`}>
        <span onClick={handleClick} class="close">&times;</span>
        <img class="modal-content" src={props.url}/>
      </div>
    </>
  );
};

export default ModalImage;
