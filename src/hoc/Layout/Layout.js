import  React, {Component} from 'react'
import './index.css';
import {ALEX} from './test';


class Layout extends Component {
    render(){
        return (
            <div className="Layout">
                <main>
                    { this.props.children}
                </main>
            </div>
        )
    }
}
export default Layout