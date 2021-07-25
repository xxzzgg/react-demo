import React, {useRef} from 'react'



class Father extends React.Component{
	constructor(props){
		super(props)
	}
	subFn() {
		return 'subFn';
	}
	render(){
		return (
			<button>{this.props.children}</button>
		)
	}
}



const FancyButton = React.forwardRef((props, ref) => {
	
	return (
		<Father ref={ref} className="FancyButton">
			{props.children}
		</Father>
	)
} );
export default FancyButton;