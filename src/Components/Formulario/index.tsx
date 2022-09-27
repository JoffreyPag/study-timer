import * as React from 'react';
import { ITarefa } from '../../Types/ITarefa';
import Button from '../Button';
import style from './Formulario.module.scss'
import {v4 as uuidv4} from 'uuid';
import { useState } from 'react';

interface Props{
    setTarefas : React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Formulario({setTarefas}:Props){
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00");
    function AdicionarTarefa(evento:React.FormEvent){
        evento.preventDefault();
        setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas, 
                {
                    tarefa,
                    tempo, 
                    selecionado:false, 
                    completado:false, 
                    id:uuidv4()} 
            ])
        setTarefa("");
        setTempo("00:00");
    }
    return(
        <form className={style.novaTarefa} onSubmit = {AdicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor='tarefa'>
                    Adicione um novo estudo
                </label>
                <input type = "text" 
                    name="tarefa" 
                    id="tarefa" 
                    value = {tarefa}
                    onChange = {evento => setTarefa(evento.target.value)}
                    placeholder='o que voce quer estudar'
                    required/>
            </div>
            <div className={style.inputContainer}>
                <label htmlFor='tempo'>
                    Tempo
                </label>
                <input type="time"
                    step="1"
                    name = "tempo"
                    value = {tempo}
                    onChange = {evento => setTempo(evento.target.value)}
                    id='tempo'
                    min="00:00:00"
                    max="01:30:00"
                    required/>
            </div>
            <Button type="submit">Adicionar</Button>
        </form>
    )
}
export default Formulario;