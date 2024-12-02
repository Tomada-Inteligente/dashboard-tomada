import { useState, useEffect, useRef } from 'react';
import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import api from '../../services/api.js';


function Login() {

  const inputEmail = useRef()
  const inputSenha = useRef()
  const [errorMessage, setErrorMessage] = useState('')
  //const [users, setUsers] = useState([]);
  //const [userEmail, setUserEmail] = useState([]);
  //const sleep = ms => new Promise(r => setTimeout(r, ms));
  let userEmail = [];


  /*async function getUsers() {
    const usersFromApi = await api.get("/users")

    setUsers(usersFromApi.data)
    //console.log(usersFromApi.data)
    console.log(users)
  }*/

  async function getUserEmail(email) {
    const userEmailFromApi = await api.get(`/users?email=${email}`)

    //setUserEmail(userEmailFromApi.data)
    //setUserEmail([...userEmail, userEmailFromApi.data]);
    userEmail = userEmailFromApi.data;
    console.log(userEmailFromApi.data)
    console.log(userEmail)
    try {
      //userEmail.length > 0 ? (
        userEmail.map((user) => (
          //  userId = (user.id) 
          console.log(user.id),
          localStorage.setItem("userId", user.id),
          console.log(localStorage.getItem("userId"))
        ))
      //) : (
      //  console.log("Não rodou")
      //)
      toDashboard()
    } catch (error) {
      console.log("Deu pal")
    }
    
  }

  function toDashboard(){
    window.location.href = '/dashboard';
  }

  /*useEffect(() => {
    console.log(userEmail);
  }, [userEmail])*/

  async function fazerlogin(event) {
    event.preventDefault();

    try {
      const response = await api.post('/login', {
        email: inputEmail.current.value,
        password: inputSenha.current.value, // Corrigi o nome para 'password'
      });



      //const { token, userId } = response.data; // Certifique-se de que a API retorne o userId
      //localStorage.setItem('token', token);
      //const { userId } = response.data
      //localStorage.setItem('userId', users.id)
      //userId = users.id;
      //console.log(userId);

      // Armazene o userId

      try {
        getUserEmail(inputEmail.current.value);        
      } catch (error) {
        console.log("Não rodou o getUser")
      }
      
      
      console.log(inputEmail.current.value)
      
      /*userEmail.map((user) => (
        //  userId = (user.id) 
        //console.log(user.id)
        localStorage.setItem("userId", user.id)
      ))*/
      //console.log(userId)
      
      //userId = userEmail.id;
      //console.log(userEmail);
      //alert(userId);

      //await sleep(5000)


      //window.location.href = '/dashboard'; // Redireciona para o dashboard após login bem-sucedido
    } catch (error) {
      setErrorMessage(error.response?.data?.msg || 'Login falhou. Verifique suas credenciais.');
    }
  }

  return (
    <div className="app-container">
      <nav className="navbar">
        <h1>BitWave</h1>
      </nav>
      <div className="container">
        <form>
          <h1>Login</h1>
          <input name="Email" type="email" placeholder="Email" ref={inputEmail} required />
          <input name="Senha" type="password" placeholder="Senha" ref={inputSenha} required />

          <button type="submit" onClick={fazerlogin}>Logar</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <p></p>

          { <GoogleLogin
            onSuccess={credentialResponse => {
              const decoded = jwtDecode(credentialResponse?.credential);
              const { email, name } = decoded; // Extrai o email e o nome do token

              // Envia os dados ao backend para login ou cadastro
              api.post('/login/google', { email, name })
                .then(response => {
                  const { token, userId } = response.data;
                  localStorage.setItem('token', token);
                  localStorage.setItem('userId', userId);
                  window.location.href = '/Dashboard'; // Redireciona após login
                })
                .catch(error => {
                  setErrorMessage(error.response?.data?.message || 'Erro ao fazer login com Google');
                });
            }}
            onError={() => {
              console.log('Login com Google falhou');
              setErrorMessage('Erro ao fazer login com Google');
            }}
          /> }


          <div className="signup-link">
            <p>Não tem uma conta? <Link to='/cadastro'>Registre-se</Link></p>
          </div>
        </form>

      </div>
      <footer className="footer">
        <div className='row mt-3'>
          <p>© 2024 BitWave. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default Login;
