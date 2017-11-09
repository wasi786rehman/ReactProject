import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
export default class App extends React.Component{
    constructor()
    {
        super();
        this.state={stage:1,heading:"Add Client"};
       
    }
    render()
    {
          var v=this.state.stage;


        return(
           
            
            <div className="containerApp">
                
                
                
                <div className="containerHeader">{this.state.heading}</div>
                <div className="containerBody">
                {
                   v==1?<Stage1 handleToUpdate={this.handleToUpdate.bind(this)}/>:<Stage2 name={this.state.v} />

                }
                </div>
                
            </div>
        );
    }
    handleToUpdate(value,v,events)
    {

this.setState({stage:value,heading:"Confirm Client",v:v});

    }
    
}
 class Stage1 extends React.Component{
    constructor()
    {
        super();
       
        this.state={stage:1,events:["Dealers","Contracts","Claims"]};
        
    }
    
    render()
    {
        var	handleToUpdate	=	this.props.handleToUpdate;
        return(
            <div>
            Client Name *<br/>
                <input type="text" className="form-control" ref="clientName"/>
                Select Event/s..*<br/>
               {this.state.events.map(function(items,i){
                   return (<div key={i}><input type="checkbox" ref={items} key={i}/>{items} <br/></div>)

               })}
                
               
                <input type="button" className="btn btn-default alignleft"  value="ok" onClick={this.okClick.bind(this)}/>
                </div>
        );
    }
    okClick()
    {
     var m=this.state.stage;
     var q=this.refs.clientName.value;
     var array=[];
     this.state.events.forEach(function(element) {
         
     }, this);
     console.log(array);
     this.props.handleToUpdate(2,q);
     

    }
}
class Stage2 extends React.Component{
    constructor()
    {
        super();
        this.state={stage:2};
    }
    render()
    {
        return(
           <div>you Are Adding Client <b>{this.props.name}</b></div>
        );
    }
}
class Stage3 extends React.Component{
    constructor()
    {
        super();
        this.state={stage:1};
    }
    render()
    {
        return(
            <div>
           <div>You have selected {this.props.name}</div> ANd Selected events are :
           {this.props.enents.map(function(items,i){
               <div><b>items</b></div>
           })}
           </div>
        );
    }
}


