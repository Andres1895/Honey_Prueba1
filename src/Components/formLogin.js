import React from 'react';
import '../Styles/header.css'


class FormLogin extends React.Component{
    constructor(props){
        super(props)
            this.state={
                user:'',
                password:''
                };     
            this.handleChange=this.handleChange.bind(this);
            this.handleClick=this.handleClick.bind(this);
    }

 /*   componentDidMount(){
        console.log(this.state);
        this.setState(()=> ({
            user: 'Montserrat',
            password: 'contraseña'
        }))

    }*/

    handleClick(){
        console.log('A name was submitted: ' + this.state.user);
        
    }   

    handleChange(event){
        this.setState({user: event.target.user,
                       password: event.target.password});
    }
    
    render(){
        console.log(this.state, 'empezando el render')
        const {pass, user} = this.state;
        return(
            <div>
                <form class="headerItem2" >
                    <label class="labelItem" >User
                    </label>
                    <input type="user" 
                    name="user" 
                    class="formStyle" 
                    placeholder="User"
                    user={user}
                    onChange={this.handleChange}
                    />
                    <label class="labelItem">
                    Password
                    </label>
                    <input type= "password"
                    name="password"
                    class="formStyle"
                    onChange={this.handleChange}
                    password={pass}
                    placeholder="Password"
                    />
                </form>
                <div class="buttonStyle">
                    <button onClick={this.handleClick()} class="buttonItem">Ingresa</button>
                </div>

            </div>
        );
    }
}

export default FormLogin;