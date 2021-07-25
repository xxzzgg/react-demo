import React , { Component } from "react"
import Child from '../child'
export default class Parent extends React.Component{
  constructor(props) {
    super(props);
    this.childRef = React.createRef();
  }

  refCallback(node) {
    console.log('1111111111111111')
    console.log(this,'this refCallback')
    this.childRef = node;
  }
  render=()=> <div>
    <button onClick={() =>{
      /*
      * 1.使用回调ref 不需要.current  且不要使用内联事件？
      * 2.使用属性需要加.current
      * */
     
      
      console.log(this.childRef.fn());
      // console.log(this.childRef.current.fn());
      
    }}>btn</button>
    <div ref="currentDom"  >字符串模式获取元素或组件</div>
    {/*<Child ref={this.refCallback} />*/}
    <Child ref={node => this.refCallback(node)} />
  </div>
}

//export default class CustomTextInput extends React.Component {
//   constructor(props) {
//     super(props);
//     // 创建一个 ref 来存储 textInput 的 DOM 元素
//     this.textInput = React.createRef();
//     this.focusTextInput = this.focusTextInput.bind(this);
//     this.childRef = React.createRef();
//   }
//
//   focusTextInput() {
//     // 直接使用原生 API 使 text 输入框获得焦点
//     // 注意：我们通过 "current" 来访问 DOM 节点
//     console.log( this.textInput.current);
//     console.log(this.childRef.current.fn())
//     this.textInput.current.focus();
//   }
//
//   render() {
//     // 告诉 React 我们想把 <input> ref 关联到
//     // 构造器里创建的 `textInput` 上
//     return (
//       <div>
//         <Child ref={this.childRef}></Child>
//         <input
//           type="text"
//           ref={this.textInput} />
//         <input
//           type="button"
//           value="Focus the text input"
//           onClick={this.focusTextInput}
//         />
//       </div>
//     );
//   }
// }