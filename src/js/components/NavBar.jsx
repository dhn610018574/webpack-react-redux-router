import React, {Component} from 'react'
import { Link } from 'react-router'
class TabController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex : 0
        }
    }
    check_title_index(index) {
        return index === this.state.currentIndex ? 'bar active select'+index:'bar normal'+index 
    }
    check_items_index(index) {
        return index === this.state.currentIndex ? 'show' : 'none'
    }
    render() {
        const that = this;
        return (
            <div>
                {/*动态生成tab*/}
                <div className='tab'>
                    {
                        React.Children.map(that.props.children,(element,index)=>{
                            return (
                                <Link 
                                to={element.props.path}
                                onClick={()=>{that.setState({currentIndex:index})}}
                                className={that.check_title_index(index)}
                                >
                                {element.props.name}
                                </Link>
                            )
                        })
                    }
                </div>
                {/*tab内容*/}
                <div className="tabContent">
                {
                    React.Children.map(that.props.children,(element,index)=>{
                        return (
                            <div className={that.check_items_index(index)}>
                            {element}
                            </div>
                        )
                    })
                }                
                </div>
                

            </div>
        )
    }
}


class TabComponent extends Component {
    render() {
        return (
            <div>
                <TabController>
                    <div name='首页' path='home'>
                        <Home></Home>
                    </div>
                    <div name='投资' path='invest'>
                        <Invest></Invest>
                    </div>
                    <div name='发现' path='find'>
                        <Find></Find>
                    </div>
                    <div name='我的' path='my'>
                        <My></My>
                    </div>
                </TabController>
            
            </div>
        )
    }
}

export default TabComponent