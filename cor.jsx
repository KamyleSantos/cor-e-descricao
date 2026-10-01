import { useState } from 'react';
import './cor.scss'

export default function Variavel(){
    const[cor, setcor] = useState("");
    const[descricao1, setdescricao1] = useState('digita ai');
    const[descricao2, setdescricao2] = useState('?');
    const[descricao3, setdescricao3] = useState('?');
    const [var1, setvar1] = useState (true);

    function mudar(e){
        let novovalor = e.target.value
        setdescricao1(novovalor);
    }

     function pegartexto(e){
        let novovalor = e.target.value
        setdescricao2(novovalor);
    }

    function mudardescricao(e){
        setdescricao3(descricao2)
    }

    function mudarcor(e){
        let novovalor = e.target.value;
        setcor(novovalor)
    }

    function opcao(e){
        let novovalor = e.target.checked
        setvar1(novovalor)
    }
    





    return(
        <div className='pagina' style={{backgroundColor:cor}}>
            <h1>{descricao1}</h1>
            <input onChange={mudar} type='text' placeholder=''></input>

            <section>
             <h2>{descricao3}</h2>
            <input onChange={pegartexto} type='text' placeholder=''></input>
            <button onClick={mudardescricao}>trocar ai tropa</button>
         </section>

        <section>
        <h1> A cor selecionada é :{cor}</h1>
        <input type="color" onChange={mudarcor} />
        </section>
            
        <section>           
            <h1>voce gosta da isabelly? {var1 ? "Sim":"Não"}</h1>
            <input type='checkbox' value={var1} onChange={opcao} ></input>
            
        </section>


        </div>

        




    )
}