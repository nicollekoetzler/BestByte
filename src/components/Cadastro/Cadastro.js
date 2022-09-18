import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

export default function Cadastro({PageaLoginComponents, setClicado}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleForm(e) {
        e.preventDefault();
        const dadosDeCadastro = {
            name,
            email,
            password,
            repeat_password: confirmPassword
        };
        const promise = axios.post('http://localhost:5000/sign-up', dadosDeCadastro);

        promise.then((res) => {
            restForm();
        })
    }

    function restForm() {
        setEmail('');
        setPassword('');
        setName('');
        setConfirmPassword('');
    }

    return (
        <PageaLoginComponents>
                    <img src="../image/logo.png"/>
                    <CashieComponents>
                        <form onSubmit={handleForm}>
                            <label>
                                Nome
                                <input 
                                    type="text"
                                    name='name'
                                    onChange={(e) => {setName(e.target.value)}}
                                    value={name}
                                    required
                                />
                            </label>
                            <label>
                                Endereço de email
                                <input  
                                     type="email" 
                                     name='email'
                                     onChange={(e) => {setEmail(e.target.value)}}
                                     value={email}
                                     required
                                />
                            </label>
                            <label>
                                Senha
                                <input  
                                    type="password"
                                    name='password'
                                    onChange={(e) => {setPassword(e.target.value)}}
                                    value={password}
                                    required
                                />
                            </label>
                            <label>
                                Confirme sua senha
                                <input  
                                    type="password"
                                    name='confirmPassword'
                                    onChange={(e) => {setConfirmPassword(e.target.value)}}
                                    value={confirmPassword}
                                    required
                                />
                            </label>
                            <button>Cadastrar</button>
                        </form>
                        <p onClick={() => {
                            setClicado(false);
                            }}>Já tem uma conta? Entre aqui!</p>
                    </CashieComponents>
                </PageaLoginComponents>
    );
}

const CashieComponents = styled.div`
    width: 85%;
    height: 470px;
    background-color: #2a2a2a;
    margin-top: 50px;

    border: 1px solid #4F4D4D;
    border-radius: 15px;
    box-shadow: 1px 1px 6px black;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`