import React, { useState } from "react";

function CreateArea(props) {
  const [data,setdata]=useState({
    title:"",
    content:""
  });
  function handlechange(event){
    var name=event.target.name;
    var val=event.target.value;
    setdata(prev=>{
         return {...prev,
          [name]:val
          
         };
    });
  }
  function submitnote(event){
    props.addnote(data);
      event.preventDefault();
     setdata({
      title:"",
      content:""
     })
  }
  
  return (
    <div>
      <form>
        <input onChange={handlechange} value={data.title} name="title" placeholder="Title" />
        <textarea onChange={handlechange} value={data.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={submitnote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
