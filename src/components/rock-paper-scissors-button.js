import PropTypes from "prop-types"
import React from "react"

export class RPS extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
    
    render() {
        return(
        	<button onClick={() => this.props.dosomething()} type="button" className="btn btn-primary mr-3">
        		<div style={{borderRadius:"50%", width:"120px",height:"120px",
        		background:"white no-repeat center",
        		backgroundImage:`url(${this.props.image})`, backgroundSize:"contain"}} />
        	</button>
        	);
        
    }

}

RPS.propTypes = {
	image: PropTypes.string,
	dosomething: PropTypes.func
	//onExit: PropTypes.func
};

export default RPS;