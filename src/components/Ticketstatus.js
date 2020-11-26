import React from 'react';
import axios from 'axios';

 
export default class Ticketstatus extends React.Component {
    state = {
        persons: [],
        term:''
    }


         OnInputSubmit = e =>{
            console.log(this.state.term);
            // const seatno = this.state.term;
        e.preventDefault();
        axios.post('http://localhost:3050/booking/ticketstatus' ,{
            seatno:this.state.term,
        })
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
                    <h2>Enter Seatno to check the status</h2>
                </div>
                <form class="w3-container" onSubmit={this.OnInputSubmit}>
                    <p>      
                    <label class="w3-text-brown"><b>Seat No</b></label>
                    <input class="w3-input w3-border w3-sand" type = 'text' value={this.state.term} onChange={e => this.setState({term:e.target.value})}/></p>
                    <p>
                    <button class="w3-btn w3-brown">Submit</button></p>
                </form>
            </div>

    
            <br/>
            <p class="w3-xxxlarge">{this.state.persons}</p>
            </div>
            
        
        )}

            
 
        }