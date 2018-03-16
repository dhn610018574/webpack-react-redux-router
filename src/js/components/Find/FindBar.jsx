import React, {Component} from 'react'
import { Link } from 'react-router'
export default class TabController extends Component {
    render() {
        return (
            <div className="tab">
                <Link to='home' className='bar normal0'>首页</Link>
                <Link to='invest' className='bar normal1'>投资</Link>
                <Link to='find' className='bar active select2'>发现</Link>
                <Link to='my' className='bar normal3'>我的</Link>
            
            </div>
        )
    }
}

