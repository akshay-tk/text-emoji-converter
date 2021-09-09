import React, { useState } from 'react'
import './App.css';
import Emoji from './emoji.json'   //json file emoji

function App() {
  const [searchValue,setSearchValue]=useState('');


  return (
<React.Fragment>

      < div class="emoji-container">
      <div class="heading">
                  Emoji Converter
                </div>
                <div class="search-bar">
                        <input type="text" placeholder="Search Emoji...." onChange={event=>{setSearchValue(event.target.value)}} />

                </div>
        <div class="emoji-list">

          {/*code to  search and display emoji  */}
          {Emoji.filter((val)=>{
            const Tag=[];
            val.tags.map((value)=>{Tag.push(value)})
            
            if(searchValue==="")
               return val;
               
               else if (val.description.toLowerCase().includes(searchValue.toLowerCase()))               {
                 return val
               }
             
          }).map((val)=>{
            return(
              <div class="emoji">{val.emoji}</div>
            )
          })}
          
        </div>

      </div>
    </React.Fragment>
   
  );
}

export default App;
