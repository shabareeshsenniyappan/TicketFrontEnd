import React from 'react';
import axios from 'axios';

 
export default class reset extends React.Component {
    state = {
        persons: [],
        term:''
    }
     


         OnInputSubmit = e =>{
            console.log(this.state.term);
        e.preventDefault();
        axios.post('http://localhost:3050/booking/reset')
            .then  (res => {
                const persons  = res.data;
                console.log(persons);
                this.setState({ persons });
            })

        }

        render(){
        return(

            <div>
                 <div class="w3-card-4">
                    <div class="w3-container w3-brown">
                        <h2>Reset all the Tickets</h2>
                    </div><br/>
                    <form class="w3-container" onSubmit={this.OnInputSubmit}>
                        <p>
                        <button class="w3-btn w3-brown">Click to Reset Ticket</button></p>
                    </form>
                </div>
                <p class="w3-xxxlarge">{this.state.persons}</p>
                
           
            </div>
            
        
        )}

            
 
        }




       