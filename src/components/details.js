import React from 'react';
import axios from 'axios';

 
export default class details extends React.Component {
    state = {
        persons: [],
        term:''
    }
     


        OnInputSubmit = e =>{
            console.log(this.state.term);
        e.preventDefault();
        axios.post('http://localhost:3050/booking/details' ,{
            seatno:this.state.term,
        })
            .then  (res => {
                const persons  = res.data;
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

            <div >
            <table >
                <div><tr><th>{this.state.persons.name ? 'Name : ' : <p class="w3-xxxlarge">{this.state.persons}</p>}</th><th>{this.state.persons.name}</th></tr></div>
                <div><tr><th>{this.state.persons.gender ? 'Gender : ' : ''}</th><th>{this.state.persons.gender}</th></tr></div>
                <div><tr><th>{this.state.persons.age ? 'age : ' : ''}</th><th>{this.state.persons.age}</th></tr></div>
                <div><tr><th>{this.state.persons.bookingid ? 'bookingid : ' : ''}</th><th>{this.state.persons.bookingid}</th></tr></div>
                
            </table>
            </div>

            {/*  */}
            </div>
            
        
        )}

            
 
        }




       