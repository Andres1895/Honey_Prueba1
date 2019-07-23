import React from 'react';
import '../Styles/header.css'


class FormLogin extends React.Component{
    constructor(props){
        super(props)
            this.state={
                user:'',
                password:''
                };     
         //   this.handleChangeUser=this.handleChangeUser.bind(this);
         //   this.handleChangePassword=this.handleChangePassword.bind(this);
            this.handleClick=this.handleClick.bind(this);
            this.handleChange=this.handleChange.bind(this);
    }

 
   /* 
    componentDidMount(){
        console.log(this.state);
        this.setState(()=> ({
            user: 'Montserrat',
            password: 'contraseña'
        }))

    }
    
    handleChangeUser(event){
        this.setState({user: event.target.value});
    }
    handleChangePassword(event){
        this.setState({password: event.target.value});
    }

    */

    handleClick(){
        console.log(this.state.password)
        if(this.state.user==="Andres" && this.state.password ==="contraseña"){
            console.log("Bienvenido")
        }else{
            console.log("no valido")
        }
    }   

    handleChange(event){
        console.log("Entrando a handleChange");
        console.log(event.target.name);
        console.log(event.target.value);
        this.setState({ [event.target.name]: event.target.value });
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
                    value={user}
                    onChange={this.handleChange}
                    />
                    <label class="labelItem">
                    Password
                    </label>
                    <input type= "password"
                    name="password"
                    class="formStyle"
                    onChange={this.handleChange}
                    value={pass}
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