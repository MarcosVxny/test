import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";

import "./Navbar.css";

function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let history = useNavigate();
  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken("")); //zera o valor do token
    toast.info('Usuário deslogado', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined
    })
    history("/login");
  }

  var navbarComponent;

  if (token !== "") {
    navbarComponent = 
      <AppBar position="static" className="bg-menu">
        <Toolbar variant="dense" className="container-menu">
          <Box style={{ cursor: "pointer" }}>
            <img className="menu-logo" src="https://svgshare.com/i/sqP.svg" alt="Logo" />
          </Box>

          <div>
            <Box className="menu-links" display="flex">
              <Link to="/home" className="link-home">
                <Box className="menu-item" mx={2}>
                  <Typography variant="h6" color="inherit">
                    home
                  </Typography>
                </Box>
              </Link>
              <Link to="/posts">
                <Box className="menu-item" mx={2}>
                  <Typography variant="h6" color="inherit">
                    postagens
                  </Typography>
                </Box>
              </Link>
              <Link to="/temas">
                <Box className="menu-item" mx={2}>
                  <Typography variant="h6" color="inherit">
                    temas
                  </Typography>
                </Box>
              </Link>
              <Link to="/formularioTema">
                <Box className="menu-item" mx={2}>
                  <Typography variant="h6" color="inherit">
                    cadastrar tema
                  </Typography>
                </Box>
              </Link>

              <Box className="menu-item" mx={2} onClick={goLogout}>
                {/* chama a função goLogout */}
                <Typography variant="h6" color="inherit">
                  logout
                </Typography>
              </Box>
            </Box>
          </div>
        </Toolbar>
      </AppBar>
  }

  return (
    <>
      {navbarComponent}
    </>
  )
}
export default Navbar;
