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
    }

    componentDidMount(){
        console.log(this.state);
        this.setState(()=> ({
            user: 'Montserrat',
            password: 'contraseña'
        }))

    }

    handleClick = () => {
        console.log('Acualizado');
        if(this.state.user==="Montserrat"){
            console.log("Bienvenido")
        }else{
            console.log("No valid")
        }
    }   
    handleChange(event){
        this.setState({value: event.target.value});
    }
    
    render(){
        console.log(this.state)
        const {pass, user} = this.state;
        return(
            <div>
                <form class="headerItem2">
                    <label class="labelItem" >User
                    </label>
                    <input type="user" 
                    name="user" 
                    class="formStyle" 
                    placeholder="User"
                    onChange={this.handleChange}
                    />
                    <label class="labelItem">
                    Password
                    </label>
                    <input type= "password"
                    name="password"
                    class="formStyle"
                    onChange={this.handleChange}
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