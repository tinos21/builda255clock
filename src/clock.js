
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

             <h1 class="title">    25 + 5 Clock        </h1>
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
               
                    {/*  sension control level  */}
              <div class="sension-break-level"> 
                 <div id="session-label">Session Length</div>
                   <button className="btn btn-primary" id="session-decrement" >
                     <i className="bi bi-arrow-down" ></i>
                    </button>
               <div class="btn-level" id="session-length">25</div>
                  <button className="btn btn-primary"  id="session-increment        ">
                 <i className="bi bi-arrow-up"></i>     
                  </button>
               </div>
                  {/*////////////////////////////////*/}

                   {/* session container here */}
                   <div id="timer-label">         
                     <h1> Session   </h1>

                     <div id="time-left"> 35 </div>
                   </div>    
                   <div class="timer-control">
                    <button id="start_stop">
                     Start/Stop
                    </button>
                    <button id="reset">
                      Reset
                    </button>
                        </div>
                </div>
               
            
        );

     }

}



export default Clock;
