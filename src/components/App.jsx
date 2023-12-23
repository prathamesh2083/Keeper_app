import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [notes,setnotes]=useState([]);
    function deletenote(id){
        setnotes(prev=>{
             return prev.filter((item,index)=>{
                  return index!==id;
             });
        });
    }
   

     function addnote(data) {
      
         setnotes(prev=>{
            return [...prev,data]
         });
         
        
     }
  return (
    <div>
      <Header />
      <CreateArea addnote={addnote}/>

      {notes.map((note,index)=>{
              return (
                <Note
                key={index}
                  id={index}
                  title={note.title}
                  content={note.content}
                  deletenote={deletenote}
                />
              );
      })}

      <Footer />
    </div>
  );
}

export default App;
