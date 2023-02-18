import React from "react";
import "./publicationcard.css";
import { Fade, Flip } from "react-reveal";
import { style } from "glamor";


function PublicationCard(props) {
  const pub = props.publication;



  return (
<div className="row justify-content-center mx-2 mt-3">


    <div className="publication-card">
      
      <div className=" row mx -2">
<div className="author  col-md-3">
  {pub.author}
</div>
<div className=" title col-md-5">
  {pub.title}
</div>
<div className=" journal col-md-2">
  {pub.journal}
</div>
<div className="col-md-2">
  <a  href={pub.url} target={"_blank"} rel="noopener noreferrer">Link</a>
</div>

      </div>
       
          
        </div>
      
        </div>
  );
}

export default PublicationCard;
