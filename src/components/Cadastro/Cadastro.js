import styled from "styled-components";

export default function Cadastro({PageaLoginComponents, setClicado}) {
    return (
        <PageaLoginComponents>
                    <img src="../image/logo.png"/>
                    <CashieComponents>
                        <form>
                            <label>
                                Nome
                                <input 
                                    id="formEmail" 
                                    type="email" 
                                    required
                                />
                            </label>
                            <label>
                                Endereço de email
                                <input  
                                    id="forSenha" 
                                    type="password"
                                    required
                                />
                            </label>
                            <label>
                                Senha
                                <input  
                                    id="forSenha" 
                                    type="password"
                                    required
                                />
                            </label>
                            <label>
                                Confirme sua senha
                                <input  
                                    id="forSenha" 
                                    type="password"
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