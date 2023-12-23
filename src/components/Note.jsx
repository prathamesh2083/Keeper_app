import React from "react";

function Note(props) {
    function deletenodefun(){
        return props.deletenote(props.id);
    }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deletenodefun} >DELETE</button>
    </div>
  );
}

export default Note;
