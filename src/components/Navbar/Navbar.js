import React from 'react';
import './Navbar.css'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

 export default function Navbar()  {
            return (
              <>
                <div className="arrow bounce">
                  <ArrowDownwardIcon style = {{fontSize: '6rem',fill:'#feab9a'}}/>
                </div>
                {/* <div className="navBar">
                        <ul>
                           <li>HOME</li>
                          <li>CAREER STORY</li>
                          
                           <li>MY WORK</li> 
                           <li>CONTACT</li>
                        </ul>
                  </div> */}
              </>
            );
        }
   
