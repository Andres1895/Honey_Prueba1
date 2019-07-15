import React from 'react';
import '../Styles/header.css'


class FormLogin extends React.Component{
    constructor(props){
        super(props);{
            this.state={
                    user:'',
                    password:''

            };
        // this.handleChange = this.handleChange.bind(this)
        }
    }
    
    render(){
        return(
            <div>
                <form class="headerItem2">
                    <label class="labelItem" >User
                    </label>
                    <input type="user" 
                    name="user" 
                    class="formStyle" 
                    placeholder="User"
                    value={this.state.user}
                    onChange={this.handleChange}
                    />
                    <label class="labelItem">
                    Password
                    </label>
                    <input type= "password"
                    name="password"
                    class="formStyle"
                    value={this.state.password}
                    placeholder="Password"
                    />
                </form>
                <div class="buttonStyle">
                    <button clasS="buttonItem">Ingresa</button>
                </div>

            </div>
        );
    }
}

export default FormLogin;