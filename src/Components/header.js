import React from 'react';
import '../Styles/header.css'
import FormLogin from './formLogin'


class Header extends React.Component{
    render(){
        return(
            <div class="containerHeader">
                <div class="headerItem1">
                    <img src={require('../Images/hw.png')} style={{width:"200px"}}/>
                </div>
                <div class="headerItem2">
                       <FormLogin/>
                </div>
            </div>
        );
    }
}

export default Header;