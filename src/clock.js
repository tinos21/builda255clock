
import React, { Component } from 'react';


class Clock extends Component{

    constructor(props){
     
         super(props);
         this.state = {
            break_label:"break",
            session_label:"Sessions",
            breaklenght:5,
            sessionlength:25,

         }

    }
  
      /// handle upper arrow 
    arrow_down_method= () =>{
     

    };

    //// handle down arrow 
    arrow_down_method= () =>{
     



    }


    formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      };
      


      start_stop_timer =()=>{
        
 
     }



    render() {

        return(

               <div>   

             <h1 class="title">    25 + 5 Clock        </h1>
                  {/*  break control level increase and decrease */}
                <div class="control-break-level"> 
                 <div id="break-label">Break Length</div>
                   <button className="btn btn-primary" >
                     <i className="bi bi-arrow-down"></i>
                    </button>
               <div class="btn-level" id="break-length">{this.state.breaklenght}</div>
                  <button className="btn btn-primary"  id="break-increment">
                 <i className="bi bi-arrow-up"></i>     
                  </button>
               </div>
               {/*////////////////////////////////*/}
               
                    {/*  sension control level increase and decrease  */}
              <div class="sension-break-level"> 
                 <div id="session-label">Session Length</div>
                   <button className="btn btn-primary" id="session-decrement" >
                     <i className="bi bi-arrow-down" ></i>
                    </button>
               <div class="btn-level" id="session-length">{this.state.sessionlength}</div>
                  <button className="btn btn-primary"  id="session-increment ">
                   <i className="bi bi-arrow-up"></i>     
                  </button>
               </div>
                  {/*////////////////////////////////*/}

                   {/* session container here */}
                   <div id="timer-label">         
                     <h1>{this.state.session_label}</h1>

                     <div id="time-left">{this.state.sessionlength}</div>
                   </div>    
                  <div class="timer-control">
                    <button id="start_stop" onClick={this.start_stop_timer}>
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
