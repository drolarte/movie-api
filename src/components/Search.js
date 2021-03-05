import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';


 const Search = ({ search,authtoken }) =>{ 


    const [searchValue, setSearchValue] = useState("");
    const [tokenValue, setTokenValue] = useState("");
    
    const handleSearchInputChanges = e => {
        setSearchValue(e.target.value);
      
    }
    const handleTokenInputChanges = e => {
        setTokenValue(e.target.value);
      
    }

    const resetInputField = () => {
        setSearchValue("");
        setTokenValue("");
    }

    const callSearchFunction = () => {
        
        search(searchValue);
        //tp
        resetInputField();
    
    }


    return (
        <div className="main">
        <p style={{textAlign:'center', 
                        fontSize:"40px", 
                        marginTop:'0px',
                        marginLeft:"10px", 
                        borderStyle:"solid",
                        borderWidth:"thin"}}>
                        IMDB API Query Interface</p>
      
         <div className="container">
             <form>
                <div className="row">
                <div className ="col-25">
                     <label htmlFor="url">URL</label>
                 </div>
                <div className="col-75">
                    <input  value={searchValue} 
                            onChange={handleSearchInputChanges} 
                            type="text"/>
                </div>
                </div>
                <div className="row">
                <div className ="col-25">
                     <label htmlFor="authtoken">Authorization Token</label>
                 </div>
                 <div className="col-75">
                        <input value={tokenValue}
                               onChange={handleTokenInputChanges}
                               type="text"/>
                 </div>
                </div>

          {/*       <div className="row">
                <div className ="col-25">
                     <label for="headers">Headers</label>
                 </div>
                 <div className="col-75">
                        <input type="text" id="headers" name="headers"/>
                 </div>
                </div>

                <div className="row">
                <div className ="col-25">
                     <label for="body">Body</label>
                 </div>
                 <div className="col-75">
                        <input type="text" id="body" name="body"/>
                 </div>
                </div>

                <div className="row">
                <div className ="col-25">
                     <label for="method">HTTP Method</label>
                 </div>
                 <div className="col-75">
                        <input type="text" id="method" name="method"/>
                 </div>
                </div>  */}
                <div style={{marginTop: '10px'}} className="row">
                <NavLink  to="/movielist"> 
                <input onClick={callSearchFunction} type="submit" value="Send"/>
                
                </NavLink>
             
                </div>

             </form>

         </div>
        </div>
    )
}

export default Search;