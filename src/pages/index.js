import React from "react";
import Score from "../components/score.js";
import 'bootstrap/dist/css/bootstrap.css';
import RPS from "../components/rock-paper-scissors-button.js";
import { graphql } from "gatsby";


export class Home extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
		    computer: 0,
		    player: 0,
		    round: 0,
		    computerChoice: "",
		    playerChoice:"",
		    computerImage:"",
		    playerImage:""
		};
		
	}
	
	handleClick(){
        this.setState({
            round : this.state.round + 1
        });
    }
	
	
	
	
	render() {
		
		const choices = [
			{
				name:"Rock",
				action: ()=> {this.handleClick(); this.setState({playerChoice:"Rock", playerImage:"https://townsquare.media/site/396/files/2018/09/Rock.jpg?w=980&q=75"})},
				image:"https://townsquare.media/site/396/files/2018/09/Rock.jpg?w=980&q=75"
			},
			{
				name:"Paper",
				action:() => {this.handleClick(); this.setState({playerChoice:"Paper", playerImage:"https://www.auspods.com.au/wp-content/uploads/2013/10/psbp01-1000x1000.png"})},
				image:"https://www.auspods.com.au/wp-content/uploads/2013/10/psbp01-1000x1000.png"
			},
			{
				name:"Scissors",
				action:() => {this.handleClick(); this.setState({playerChoice:"Scissors", playerImage:"https://images-na.ssl-images-amazon.com/images/I/71baCLK2M1L._SL1500_.jpg"})},
				image:"https://images-na.ssl-images-amazon.com/images/I/71baCLK2M1L._SL1500_.jpg"
			}
		];
		
		return (
			<div className="container-fluid">
			    <div className="row">
			    	<div className="mx-auto">
			    		<h1 className="mb-4">Rock Paper Scissors</h1>
			    	</div>
			    	<div className="col-12 mb-5 d-flex justify-content-around">
	    			    <Score title="Player Score" score={this.state.player} />
	    			    <Score title="Round" score={this.state.round}/>
	    				<Score title="Computer Score" score={this.state.computer} />
    				</div>
    				
    					<div className="col-5 mb-5 mx-auto d-flex justify-content-between">
    						<div className="border border-dark" style={{borderRadius:"50%", width:"120px",height:"120px",
        		background:"white no-repeat center",
        		backgroundImage:`url(${this.state.playerChoice})`, backgroundSize:"contain"}} />
    						<div className="border border-success rounded">
    							<p>{this.state.playerChoice}</p>
    						</div>
    					</div>
    				
    				
    					<div className="col-9 mx-auto d-flex justify-content-around">
		    				 {
            					choices.map((data, key)=>{
                					return (
                						<RPS dosomething={data.action} image={data.image} key={key} />
                					);
            					})
                
                
            					}
	    				</div>
    			
    			</div>
			</div>
		);
	}
}

export default Home;