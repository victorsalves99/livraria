import "./Form.css";
import { Link, redirect } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Textarea,
  Input,
  Text,
} from "@chakra-ui/react";

import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [title, setTitle] = useState("");
  const [size, setSize] = useState("");
  const [file, setFile] = useState();
  const [cover, setCover] = useState();
  const [description, setDescription] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    formData.append("description", description);
    formData.append("size", size);
    const resp = await axios.post(`http://18.230.74.202:8080/book`, formData);


    const data = new FormData()
    data.append("file",cover)
    await axios.patch(`http://18.230.74.202:8080/book/cover/${resp.data.book._id}`,data)

    setDescription("");
    setFile("");
    setSize("");
    setTitle("");
    location.href = "/";
  };

  return (
    <div className="conteiner-form">
      <Link to={"/"} className="from-logo">
        Vs BookStore
      </Link>
      <form
        className="form-register"
        onSubmit={(ev) => handleSubmit(ev)}
        id="form"
      >
        <h3 className="form-title">Cadastrar Livro</h3>

        <FormControl marginBottom={30}>
          <FormLabel>Titulo</FormLabel>
          <Input
            type="text"
            borderColor={"black"}
            value={title}
            onChange={(ev) => setTitle(ev.target.value.toLocaleUpperCase())}
          />
        </FormControl>
        <FormControl marginBottom={30}>
          <FormLabel>Tamanho do arquivo</FormLabel>
          <Input
            type="text"
            borderColor={"black"}
            value={size}
            onChange={(ev) => setSize(ev.target.value)}
          />
        </FormControl>
        <FormControl marginBottom={30}>
          <FormLabel>Arquivo</FormLabel>
          <Input
            type="file"
            borderColor={"black"}
            onChange={(ev) => setFile(ev.target.files[0])}
            name="file"
          />
        </FormControl>
        <FormControl marginBottom={30}>
          <FormLabel>Capa</FormLabel>
          <Input
            type="file"
            borderColor={"black"}
            onChange={(ev) => setCover(ev.target.files[0])}
            name="image"
          />
        </FormControl>
        <div>
          <Text mb="8px">Descrição</Text>
          <Textarea
            placeholder="Descrição"
            size="sm"
            borderColor={"black"}
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
          />
        </div>

        <button type="submit" className="btn-register">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default Form;
