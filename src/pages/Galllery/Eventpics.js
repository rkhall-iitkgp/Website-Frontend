import { Modal } from "@material-ui/core";
import React from "react";
import imagedata from "./imagedata"
import ModalImage from "./ModalImage";

const eventpics = (props) => {
    const picslist = imagedata.map(x => <ModalImage url={x.url}/>);
    console.log(picslist)

    const picslist1 = picslist.filter((x, i) => {
      if(i%3===1) return true;
      else return false;
    })

    const picslist2 = picslist.filter((x, i) => {
      if(i%3===0) return true;
      else return false;
    })

    const picslist3 = picslist.filter((x, i) => {
      if(i%3===2) return true;
      else return false;
    })

    return (
    <div className="gallery">
      <span className="eventtitle">{props.title}</span>
      <div className="images">
        <div className="column">
          {picslist1}
        </div>
        <div className="column">
          {picslist2}
        </div>
        <div className="column">
          {picslist3}
        </div>
      </div>
    </div>
  );
};

export default eventpics;
