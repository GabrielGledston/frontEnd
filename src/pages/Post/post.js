import React from "react";
import axios from "axios";

import './post.css'
import Header from "../../components/header";
import imgBtn from '../../images/btnEnviar.png'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const validationPost = yup.object().shape({
    nome: yup.string().required("nome é obrigatório"),
    telefone: yup.string().required("telefone é obrigatório"),
    email: yup.string(),
    sala: yup.string().required(),
})

function Post() {

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(validationPost)
    })

    const addPost = data => axios.post("https://sistema-premen-votacao.herokuapp.com/cliente", data)
    .then(() =>{
        console.log("enviou")
        console.log(data)
    })
    .catch(()=>{
        console.log("error")
        console.log(data)
    })

    return(
        <div>
            <Header />

            <div class="contForm">
                <div class="centerForm">
                    <div class="container">
                        <div class="forms">
                            <div formsLogin>
                                <span class="title"></span>
                                <form onSubmit={handleSubmit(addPost)}> 
                                    <div class="titleCenter">
                                        <h1>Dados de contato</h1>
                                    </div>
                                    <div class="formInput">
                                        <input type="text" name="nome" {...register("nome")} placeholder="Digite seu nome"/>
                                        <span class="errorMessage">{errors.nome?.message}</span>
                                        <i class="las la-user"></i>
                                    </div>
                                    <div class="formInput">
                                        <input type="tel" name="telefone" {...register("telefone")} placeholder="Digite seu telefone"/>
                                        <span class="errorMessage">{errors.telefone?.message}</span>
                                        <i class="las la-phone"></i>
                                    </div>
                                    <div class="formInput">
                                        <input type="text" name="email" {...register("email")} placeholder="digite seu email"/>
                                        <span class="errorMessage">{errors.email?.message}</span>
                                        <i class="las la-envelope"></i>
                                    </div>
                                    
                                    
                         <div class="contGeral">
                          <div class="main-container">
                            <h2 id="title1">Qual foi o melhor projeto?</h2>
                            <div class="radio-buttons">
                                <label class="custom-radio">
                                    <input type="radio" name="radio" id="info" value="Informática" checked {...register("sala")} />
                                    <span class="radio-btn"><i class="las la-check"></i>
                                        <div class="project-icon">
                                            <i class="las la-laptop-code"></i>
                                            <h3>Informática</h3>
                                        </div>
                                    </span>
                                </label>
                                <label class="custom-radio">
                                    <input type="radio" name="radio" id="enfe" value="Enfermagem" {...register("sala")} />
                                    <span class="radio-btn"><i class="las la-check"></i>
                                        <div class="project-icon">
                                            <i class="las la-stethoscope"></i>
                                            <h3>Enfermagem</h3>
                                        </div>
                                    </span>
                                </label>
                                <label class="custom-radio">
                                    <input type="radio" name="radio" id="recu" value="Recursos" {...register("sala")} />
                                    <span class="radio-btn"><i class="las la-check"></i>
                                        <div class="project-icon">
                                            <img src="https://img.icons8.com/fluency-systems-regular/96/000000/human-resources.png"/>
                                            <h3>Recursos Humanos</h3>
                                        </div>
                                    </span>
                                </label>
                                <label class="custom-radio">
                                    <input type="radio" name="radio" id="juri" value="juridicos" {...register("sala")} />
                                    <span class="radio-btn"><i class="las la-check"></i>
                                        <div class="project-icon">
                                            <i class="las la-balance-scale-left"></i>
                                            <h3>Serviços juridicos</h3>
                                        </div>
                                    </span>
                                </label>
                                <label class="custom-radio">
                                    <input type="radio" name="radio" id="clini" value="Analises" {...register("sala")} />
                                    <span class="radio-btn"><i class="las la-check"></i>
                                        <div class="project-icon">
                                            <i class="las la-microscope"></i>
                                            <h3>Analises clinicas</h3>
                                        </div>
                                    </span>
                                </label>
                                <label class="custom-radio">
                                    <input type="radio" name="radio" id="farma" value="Farmácia" {...register("sala")} />
                                    <span class="radio-btn"><i class="las la-check"></i>
                                        <div class="project-icon">
                                            <i class="las la-pills"></i>
                                            <h3>Farmácia</h3>
                                        </div>
                                    </span>
                                </label>
                                <label class="custom-radio">
                                    <input type="radio" name="radio" id="redes" value="redes" {...register("sala")} /> 
                                    <span class="radio-btn"><i class="las la-check"></i>
                                        <div class="project-icon">
                                            <i class="las la-project-diagram"></i>
                                            <h3>Redes</h3>
                                        </div>
                                    </span>
                                </label>
                            </div>
                         </div>
                      </div>

                                    <button type="submit"><img src={imgBtn} alt="" width="110px"/></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Post