import React, { ChangeEvent, useEffect, useState } from "react";
import { Container, Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { busca, buscaId, post, put } from "../../../services/Service";
import Tema from "../../../models/Tema";
import Postagem from "../../../models/Postagem";
import { TokenState } from "../../../store/tokens/tokensReducer";

import "./CadastroPost.css";

function CadastroPost() {
  let history = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [temas, setTemas] = useState<Tema[]>([]); //guarda todos os temas do backend
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  //state que guarda apenas um tema escolhido específico
  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: "",
  });

  const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    titulo: "",
    texto: "",
    data: "",
    tema: null,
  });

  useEffect(() => {
    if (token === "") {
      toast.error('Você precisa estar logado!', {
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
  }, [token]);

  useEffect(() => {
    setPostagem({
      ...postagem,
      tema: tema,
    });
  }, [tema]);

  useEffect(() => {
    //se o id for diferente de indefinido, será feita uma atualização
    getTemas();
    if (id !== undefined) {
      findByIdPostagem(id);
    }
  }, [id]);

  async function getTemas() {
    await busca("/temas", setTemas, {
      headers: {
        Authorization: token,
      },
    });
  }

  //busca de postagens por id
  async function findByIdPostagem(id: string) {
    await buscaId(`/postagens/${id}`, setPostagem, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {
    //atualiza o state
    setPostagem({
      ...postagem,
      [e.target.name]: e.target.value,
      tema: tema,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      //caso tenha id, atualiza a postagem
      try {
        await put("/postagens", postagem, setPostagem, {
          headers: {
            Authorization: token,
          },
        });
        toast.success("Postagem atualizada com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined
        })
      } catch (error) {
        toast.error("Erro ao atualizar, verifique os campos!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined
        })
      }
    } else {
      //caso não tenha id, é criado uma postagem
      try {
        await post("/postagens", postagem, setPostagem, {
          headers: {
            Authorization: token,
          },
        });
        toast.success("Postagem cadastrada com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined
        })
      } catch (error) {
        toast.error("Erro ao cadastrar, verifique os campos!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined
        })
      }
    }
    back();
  }

  function back() {
    history("/posts");
  }

  return (
    <Container maxWidth="sm" className="modal-postagem" >
      <form onSubmit={onSubmit}>
        <Typography
          variant="h3"
          color="textSecondary"
          component="h1"
          align="center"
          className="titulo-cadastro-post"
        >
          Formulário de cadastro postagem
        </Typography>

        <TextField
          value={postagem.titulo}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
          id="titulo"
          label="Título"
          variant="outlined"
          name="titulo"
          margin="normal"
          fullWidth
        />
        <TextField
          value={postagem.texto}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
          id="texto"
          label="Texto"
          name="texto"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <FormControl>
          <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            onChange={(e) =>
              buscaId(`/temas/${e.target.value}`, setTema, {
                headers: {
                  Authorization: token,
                },
              })
            }
          >
            {temas.map((item) => (
              <MenuItem value={item.id}>{item.descricao}</MenuItem>
            ))}
          </Select>
          <FormHelperText>Escolha um tema para a postagem</FormHelperText>
          <Button type="submit" variant="contained" color="secondary">
            Finalizar
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}
export default CadastroPost;
