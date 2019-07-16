import React from 'react';
import '../Styles/header.css'


class FormLogin extends React.Component{
    constructor(props){
        super(props)
            this.state={
                user:'',
                password:''
                };     
    }

    handleClick = () => {
        console.log('Acualizado');
        if(this.state.user==="Andres"){
            console.log("Bienvenido")
        }else{
            console.log("No valid")
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
                    onChange={this.state.user}
                    />
                    <label class="labelItem">
                    Password
                    </label>
                    <input type= "password"
                    name="password"
                    class="formStyle"
                  
                    onChange={this.state.password}
                    placeholder="Password"
                    />
                </form>
                <div class="buttonStyle">
                    <button onClick={this.handleClick} class="buttonItem">Ingresa</button>
                </div>

            </div>
        );
    }
}

export default FormLogin;