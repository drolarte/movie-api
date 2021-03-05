import React from 'react';
import { NavLink, withRouter} from 'react-router-dom';

const Sidebar = () =>{

 
    return (
        <div className="sidenav">
            
            <NavLink
                to="/">Home</NavLink>
            <NavLink
                to="/about">About</NavLink>
        </div>
        
    )
}
export default withRouter(Sidebar);