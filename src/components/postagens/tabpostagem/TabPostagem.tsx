import React, { useState } from "react";
import { AppBar, Tab, Tabs, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { TabContext, TabPanel } from "@material-ui/lab";
import ListaPostagem from "../listapostagem/ListaPostagem";
import "./TabPostagem.css";

function TabPostagem() { //função para trocar o painel de exibição na home
  const [value, setValue] = useState("1"); //alterar o valor do estado
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue); //modifica o valor da variável value
  }
  return (
    <>
      <TabContext value={value}> 
      {/* / TabContext irá iniciar com o valor 1, ou seja, exibindo o TabPanel 1 (ListaPostagem)*/}
        <AppBar position="static">
          {/* Para alterar o valor de value de acordo com o click */}
          <Tabs centered onChange={handleChange} className="tab-barra-abas"> 
            <Tab label="Todas as postagens" value="1" />
            <Tab label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" style={{backgroundColor: " rgba(10, 7, 73, 1) "}}>
          <Box display="flex" flexWrap="wrap" justifyContent="center" >
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2" style={{backgroundColor: " rgba(10, 7, 73, 1) "}}>
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">
            Sobre-nós
          </Typography>
          <Typography variant="body1" gutterBottom align="justify" className="texto-sobre">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos ut eveniet natus totam et, voluptate dicta tempore
            alias, odio nobis non eius cupiditate minima inventore pariatur!
            Ipsum itaque consectetur voluptatibus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quo velit consequuntur suscipit
            fugiat, nam quis quod quaerat veritatis et, vel ratione beatae,
            facere neque! Quo animi porro voluptate saepe deleniti? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Inventore adipisci,
            officia aut quidem dolorum deserunt iure dolorem doloribus velit
            nobis quas consequatur at ullam odit, nesciunt est nulla nihil
            excepturi!
          </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;
