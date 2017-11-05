import React from 'react';
export default class App extends React.Component{
    constructor()
    {
        super();
        this.state={stage:1};
       
    }
    render()
    {
          var v=this.state.stage;
          if(v==2)
           return (<App1  name={this.refs.clientName.value} />)
           else

        return(
           
            
            <div className="containerApp">
                
                
                
                <div className="containerHeader">Add Client</div>
                <div className="containerBody">
                {
                   v==1?<Stage1 handleToUpdate={this.handleToUpdate.bind(this)}/>:<Stage2/>

                }
                </div>
                
            </div>
        );
    }
    handleToUpdate(value)
    {
alert("dsfsd");
alert(value);
    }
    
}
 class Stage1 extends React.Component{
    constructor()
    {
        super();
        this.state={stage:1};
        
    }
    
    render()
    {
        var	handleToUpdate	=	this.props.handleToUpdate;
        return(
            <div>
            Client Name *<br/>
                <input type="text" className="form-control" ref="clientName"/>
                Select Event/s..*<br/>
                <input type="checkbox"/>Dealer<br/>
                <input type="checkbox"/>Contract<br/>
                <input type="checkbox"/>Claims<br/>
                <input type="button" className="btn btn-default alignleft"  value="ok" onClick={() => handleToUpdate('someghgjkVar')}/>
                </div>
        );
    }
    okClick()
    {
     var m=this.state.stage;
     var q=this.refs.clientName.value;
     
     

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
           <div>you have selected {this.props.name}</div>
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
           <div>you have selected {this.props.name}</div>
        );
    }
}
