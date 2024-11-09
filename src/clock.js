
import React, { Component } from 'react';


class Clock extends Component{

    constructor(props){
     
         super(props);
         this.state = {

         }



    }





    render() {

        return(


               <div>   
             
                  {/*  break control level  */}
                <div class="control-break-level"> 
                 <div id="break-label">Break Length</div>
                   <button className="btn btn-primary" >
                     <i className="bi bi-arrow-down"></i>
                    </button>
               <div class="btn-level" id="break-length">5</div>
                  <button className="btn btn-primary"  id="break-increment">
                 <i className="bi bi-arrow-up"></i>     
                  </button>
               </div>
               {/*////////////////////////////////*/}

    
                </div>
               
 
        );

     }

}



export default Clock;
