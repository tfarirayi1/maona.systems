import React
    from 'react';
import LoginBroker
    from 'brokers/login.broker';
import FormBroker
    from 'brokers/form.broker';

export default class ChangePasswordPage extends React.Component{
    constructor(props){
        super(props);
        // LOAD FUNCTIONS
        this._handleInputChange=FormBroker.handleInputChange.bind(this);
        this._setNewPassword=LoginBroker.setNewPassword.bind(this);
        this._traverseForm=FormBroker.traverseForm.bind(this);
        // SET STATE
        const {location}=props;
        this.form=React.createRef();
        this.formSubmitButton=React.createRef();
        this.state={};
        this.state.emailInput=location.state?location.state.emailInput?location.state.emailInput:'':'';
        this.state.verificationCodeInput='';
        this.state.passwordInput='';
        this.state.passwordConfirmationInput='';
    }

    componentDidMount(){
        if(this.state.emailInput===''){
            // this.props.history.replace({
            //     pathname:'/login/reset_password'
            // });
        }
    }

    render(){
        const Form=(
            <div ref={this.form}>
                <div>
                    <label htmlFor="emailInput">
                        email
                    </label>
                    <input id="emailInput" type="email" autoComplete="off" value={this.state.emailInput} onKeyDown={this._traverseForm} onChange={this._handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="verificationCodeInput">
                        verification code
                    </label>
                    <input id="verificationCodeInput" type="number" value={this.state.verificationCodeInput} onKeyDown={this._traverseForm} onChange={this._handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="passwordInput">
                        new password
                    </label>
                    <input id="passwordInput" type="password" value={this.state.passwordInput} onKeyDown={this._traverseForm} onChange={this._handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="passwordConfirmationInput">
                        confirm new password
                    </label>
                    <input id="passwordConfirmationInput" type="password" value={this.state.passwordConfirmationInput} onKeyDown={this._traverseForm} onChange={this._handleInputChange}/>
                </div>
                <div>
                    <div tabIndex="0" ref={this.formSubmitButton} onClick={this._setNewPassword}>
                        submit
                    </div>
                </div> 
            </div>
        );

        return(
            <div>
                <div>
                    Change Password
                </div>
                {Form}
            </div>
        );
    }
}