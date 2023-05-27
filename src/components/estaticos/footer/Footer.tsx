import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Typography, Grid } from "@material-ui/core";
import { Box } from "@mui/material";

import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

import "./Footer.css";

function Footer() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  var footerComponent;

  if (token !== "") {
    footerComponent = 
      <Grid
        className="footer-container"
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid className="footer-grid" alignItems="center" item xs={12}>
          <Box className="footer-box">
            <Box
              className="footer-title"
              padding={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                className="footer-icons-title"
                variant="h5"
                align="center"
                gutterBottom
              >
                Siga-nos nas redes sociais{" "}
              </Typography>
            </Box>
            <Box
              className="footer-icons"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <a
                className="footer-icons-item"
                href="https://www.facebook.com/generationbrasil"
                target="_blank"
              >
                <FacebookIcon style={{ fontSize: 30 }} />
              </a>
              <a
                className="footer-icons-item"
                href="https://www.instagram.com/generationbrasil/"
                target="_blank"
              >
                <InstagramIcon style={{ fontSize: 30 }} />
              </a>
              <a
                className="footer-icons-item"
                href="https://www.linkedin.com/school/generationbrasil/"
                target="_blank"
              >
                <LinkedInIcon style={{ fontSize: 30 }} />
              </a>
            </Box>
          </Box>
          <Box className="footer-final">
            <Box paddingTop={1}>
              <Typography
                className="footer-copyright"
                variant="subtitle2"
                align="center"
                gutterBottom
                style={{ color: "white" }}
              >
                Copyright © 2023 Liliam Oliveira. Todos os direitos reservados
              </Typography>
            </Box>
            <Box>
              <a
                className="footer-link"
                target="_blank"
                href="https://github.com/Lihsolive"
              >
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  style={{ color: "white" }}
                  align="center"
                >
                  github.com/Lihsolive
                </Typography>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
  }
  return (
    <>
      {footerComponent}
    </>
  )
}
export default Footer;
