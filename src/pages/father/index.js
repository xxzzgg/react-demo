import React, { Component } from 'react'
import Sun from '../sun'

 class Father extends Component {
  constructor(props) {
   
    super(props);
    console.log(props,'father props')
  }
  
  render() {
    return (
      <div>
        i am Me page
        <Sun
          grandRef={this.props.grandRef}
          a={'a'}
        ></Sun>
      </div>
    )
  }
}

const newFather = React.forwardRef((props, ref) =>{
  console.log(props,ref,'forwardRef');
  return (
    <Father grandRef={ref}
        {...props}></Father>
  )
});
export default newFather;