import React from 'react';
import '../Styles/header.css'
import Home from '../Components/Home';


class FormLogin extends React.Component{
    constructor(props){
        super(props)
            this.state={
                user:'',
                password:'',
                show: false,
                nickname: '',
                };     
            this.handleClick=this.handleClick.bind(this);
            this.handleChange=this.handleChange.bind(this);
            this.handleClean=this.handleClean.bind(this);
    }
    componentDidMount(){
        this.setState(()=>({
            user:'',
            password:'',
            show: false,
            nickname: ''
        }))

    }

    handleClick(){
        const {show} = this.state;
        console.log(show)
        if(this.state.user==="Andres" && this.state.password ==="contraseña"){
            console.log("Bienvenido")
            this.setState({show: true})
        }else{
            console.log("no valido")
            this.setState({show: false})
        }
    }   

    handleChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }
    handleClean(event){
        this.setState({
            user:'',
            password:'',
            show: false,
            nickname: ''
        })
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
                     {this.state.show && 
                    <form class="headerItem2">
                        <label class="labelItem">
                            Número
                        </label>
                        <input type= "nickname"
                        name="nickname"
                        class="formStyle"
                        value={pass}
                        />
                    </form>}
                </form>
                <div class="buttonStyle">
                    <button onClick={this.handleClick} class="buttonItem">Ingresa</button>
                    <button onClick={this.handleClean} class="buttonItem">Borrar</button>
                </div>              
            </div>
        );
    }
}

export default FormLogin;