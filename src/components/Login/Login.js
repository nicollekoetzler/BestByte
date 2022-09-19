import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState, useContext } from "react";
import Cadastro from "../Cadastro/Cadastro";
import axios from "axios";
import UserContext from "../../contexts/usercontexts";

export default function Login({setToken}) {

    const { userData, setUserData } = useContext(UserContext)

    const navigate = useNavigate();
    const [clicado, setClicado] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    function handleForm(e) {
        e.preventDefault();
        const dados = {
            email,
            password,
        }

        const promise = axios.post('http://localhost:5000/sign-in', dados);

        promise.then((res) => {
            setToken(res.data.token);
            restForm();
            setUserData(res.data);
            navigate('/cart');
        })
        promise.catch((err) => {
            alert('Não foi possível entar, verifique seus dados!')
        })

        function restForm() {
            setEmail('');
            setPassword('');
        }
    }

    function registro() {
        if(!clicado) {
            return (
                <PageaLoginComponents>
                    <img src="../image/logo.png"/>
                    <CashierComponents>
                        <form onSubmit={handleForm}>
                            <label>
                                Nome ou endereço de email
                                <input 
                                    id="formEmail" 
                                    type="email" 
                                    onChange={(e) => {setEmail(e.target.value)}}
                                    value={email}
                                    required
                                />
                            </label>
                            <label>
                                Senha
                                <input  
                                    id="forSenha" 
                                    type="password"
                                    onChange={(e) => {setPassword(e.target.value)}}
                                    value={password}
                                    required
                                />
                            </label>
                            <button>Entrar</button>
                        </form>
                        <p onClick={() => {
                                setClicado(true);
                            }}>Primeira vez aqui? Crie uma conta!</p>
                    </CashierComponents>
                </PageaLoginComponents>
            );
        }

        if(clicado) {
            return (
                <Cadastro PageaLoginComponents={PageaLoginComponents} setClicado={setClicado}/>
            );
        }
    }

    return (
        <>
            {registro()}
        </>
    );
}

const PageaLoginComponents = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #212121;
    font-family: 'Roboto';
    color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 200px;
    }

    form {
        width: 85%;
        height: 80%;
        margin: 5px 0;

        display: flex;
        flex-direction: column;
    }

    label {
        display: flex;
        flex-direction: column;
    }

    input {
        height: 35px;
        border: 1px solid #0F9C18;
        border-radius: 8px;
        background-color: #272727;
        color: white;
        padding-left: 15px;

        margin: 15px 0;
    }

    button {
        height: 35px;
        background-color: #0F9C18;
        border: 0;
        border-radius: 8px;

        color: white;
        font-family: 'Roboto';
        font-size: 16px;
        font-weight: 700;

        cursor: pointer;
    }

    p {
        color: white;
        font-size: 12px;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`
const CashierComponents = styled.div`
    width: 85%;
    height: 260px;
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
