import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import bookticket from './components/bookticket';
import details from './components/details';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Ticketstatus from './components/Ticketstatus';
import open from './components/open';
import close from './components/close';
import reset from './components/reset';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={bookticket}exact/>
             <Route path="/Ticketstatus" component={Ticketstatus}/>
             <Route path="/details" component={details}/>
             <Route path="/open" component={open}/>
             <Route path="/close" component={close}/>
             <Route path="/reset" component={reset}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;