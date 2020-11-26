import React from 'react';
import axios from 'axios';

 
export default class open extends React.Component {
    state = {
        persons: [],
    }
    


        OnInputSubmit = e =>{
        e.preventDefault();
        axios.post('http://localhost:3050/booking/open')
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
                        <h2>View all opened Tickets</h2>
                    </div><br/>
                    <form class="w3-container" onSubmit={this.OnInputSubmit}>
                        <p>
                        <button class="w3-btn w3-brown">Click to view open Tickets</button></p>
                    </form>
                </div>
                
                <div class="w3-container">
                <ul class="w3-ul w3-hoverable"> 
                    {this.state.persons.map(persons => {
                    return <li >{persons.seatno}</li>;
                    })}
                    </ul>
                </div>
           
            </div>
            
        
        )}
            
 
        }