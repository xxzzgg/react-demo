import React, { Component } from 'react'
import Father from '../father/index'
import Parent from '../parent'
import FancyButton from '../parentForwardRef'
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.fancyBtnRef = React.createRef();
  }
  node = null;
  componentDidMount(){
    console.log(this.node,'想获取到的元素')
  }
  
  render() {
    console.log(this.props,'this.props')
    return (
      <div>
        index page
        <Father ref={node => {this.node = node}} toMe={'toMe'}></Father>
        <div ref={(node)=> this.currentDom = node }  >Ref模式获取元素或组件</div>
        <div ref="currentDom"  >字符串模式获取元素或组件</div>
        <div>---------------</div>
        <Parent></Parent>
        <div>---------------</div>

        <FancyButton ref={this.fancyBtnRef}>
          <div onClick={() => {
            console.log(this.fancyBtnRef.current.subFn())
          }}>prop children click me</div>
        </FancyButton>
        <div>---------------</div>
      </div>
    )
  }
}
