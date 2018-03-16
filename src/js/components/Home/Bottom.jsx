import React, {Component} from 'react'
import { Link } from 'react-router'
import './index.scss'
export default class Bottom extends Component {
  render(){
    return(
      <div className='bottomBtn'>
        <Link to='aboutUs'>关于信而富</Link>
      </div>       
    )
  }
}