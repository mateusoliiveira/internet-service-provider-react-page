import React, {useState} from 'react'
import './FormLoginStyles.css'

const FormLogin = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className='form'>
            <form>
                <label>Email</label>
                <input 
                    type='text' 
                    onChange={(event) => {
                        setUsername(event.target.value);
                        }}>

                </input>
                <label>Senha</label>
                <input 
                    type='email' 
                    onChange={(event) => {
                        setPassword(event.target.value);
                        }}>
                </input>
                <button className='btn'>Entrar</button>
            </form>
        </div>
    )
}

export default FormLogin
