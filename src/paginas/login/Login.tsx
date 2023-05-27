import React, { ChangeEvent, useEffect, useState } from "react";
import { Grid, TextField, Typography, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import firebase from "firebase/app";
import "firebase/auth";

import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import { addToken } from "../../store/tokens/actions";

import { auth, googleAuthProvider } from './firebase';

import "./Login.css";

function Login() {
  let history = useNavigate();
  const dispatch = useDispatch();

  const [token, setToken] = useState("");

  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
  });

  const handleGoogleLogin = () => {
    auth.signInWithRedirect(googleAuthProvider);
  };

  useEffect(() => {
    if (token !== "") {
      dispatch(addToken(token));
      history("/home");
    }
  }, [token]);

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login(`/usuarios/logar`, userLogin, setToken);
      toast.success("Usuário logado com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    } catch (error) {
      toast.error("Dados inválidos. Erro ao logar!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    }
  }
  return (
    <Grid
      className="container"
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid className="container-form-login" >
        <Box className="container-inputs" paddingX={3}>
          <form onSubmit={onSubmit}>
            <Typography
              className="titulo-login"
              variant="h3"
              gutterBottom
              component="h3"
              align="center"

            >
              Login
            </Typography>
            <TextField
              value={userLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="usuario"
              label="email"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
              className="marginInput"

            />
            <TextField
              value={userLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="senha"
              label="senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth

            />
            
            <Box marginTop={8} textAlign="center">
            <Button
            className="btn-google"
            variant="contained"
            onClick={handleGoogleLogin}
          >
            Login com Google
          </Button>
              <Button className="btn-enviar" type="submit" variant="contained">
                Logar
              </Button>
            </Box>
          </form>
          <Box display="flex" justifyContent="center" marginTop={3}>
            <Box marginRight={1}>
              <Typography
                variant="subtitle1"
                gutterBottom
                align="center"
                className="legenda-login"
              >
                Não tem uma conta?
              </Typography>
            </Box>
            <Link to="/cadastrousuario">
              <Typography
                variant="subtitle1"
                gutterBottom
                align="center"
                className="legenda-cadastrar"
              >
                Cadastre-se
              </Typography>
            </Link>
          </Box>
        </Box>
      </Grid>

    </Grid>
  );
}
export default Login;
