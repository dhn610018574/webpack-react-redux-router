import React ,{Component} from 'react'
import {Link,browserHistory} from 'react-router'
import './index.scss'
export default class Title extends Component {
  constructor(props){
    super(props)

  }
  goBack() {
    browserHistory.push(this.props.url)
  }
  render() {
    return(
      <div className='commonHeader'>
        <h3 className='commontitle'><span onClick={this.goBack.bind(this)}></span>{this.props.title}</h3>
      </div>
    )
  }
}