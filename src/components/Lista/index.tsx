import React from 'react';
import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import style from './Lista.module.scss';

interface Props {
  tarefas: ITarefa[],
  selecionaTarefa?: (tarefaSelecionada: ITarefa) => void,
  tipoLista: string
}


function Lista({ tarefas, selecionaTarefa, tipoLista }: Props) {
  return (
    <aside className={style.listaTarefas +" "+ tipoLista}>
      <h2>{tipoLista === "ongoing" ? "A fazer" : "Feitas"}</h2>
      <ul>
        {tarefas.map(item => (
          <Item
            selecionaTarefa={selecionaTarefa}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;