import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'


import './styles.css';
 
function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
            <img src="https://s2.glbimg.com/U1VZE7Et4FVXYLDnfmev7YA7AVc=/0x0:752x502/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/T/p/gcfS1rRs6DPVPkLVaYYg/pauta-2-brasileiros-e-a-internet.jpg" alt="Bira Carvalho"/>
            <div>
                <strong>Bira Carvalho</strong>
                <span>Química</span>
            </div>
        </header>
        <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br/> <br/>
           Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
        </p>
        <footer>
            <p>
                Preço/hora
                <strong>R$ 70,00</strong>
            </p>
            <button type='button'>
                <img  src={whatsappIcon} alt="Whatsapp"/>
                Entrar em Contato
            </button>
        </footer>


    </article>
    );
}


export default TeacherItem;