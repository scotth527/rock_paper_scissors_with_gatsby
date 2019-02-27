import PropTypes from "prop-types"
import React from "react"

export class Score extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
    
    render() {
        return(
            
                <div className="col-3 text-center">
                    <h2>{this.props.title}</h2>
                    <div className="border border-dark text-center">
                        <h1>{this.props.score}</h1>
                    </div>
                </div>
            
            );
    }
}

Score.propTypes = {
	score: PropTypes.number,
	title:PropTypes.string
	//onExit: PropTypes.func
};

Score.defaultProps = {
	score: 0
};

export default Score;