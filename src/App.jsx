import Titulo from "./Titulo"
import './Curriculo.css'
import Foto from "./img/img1.png"


function App() {
  return <div>
    <img src={Foto}/>
    <Titulo nome="Lincoln Vinícius Sousa e Souza"/>
    <h3>Contato</h3>
    <hr/>
    <p>E-mail: lincolnvinicius647@gmail.com</p>
    <p>Telefone: (13)98814-5862</p>
    <p>Rua José Viegas, 110 - Parque Continental - São Vicente/SP</p>
    <hr/>
    <h3>Objetivo</h3>
    <p>Procuro estágio na área e desejo me desenvolver profissionalmente.</p>
    <hr />
    <h3>Experiência</h3>
    <h2>Vendedor</h2>
    <p>Armazém Brasil - JAN/2021 - JUN/2022</p>
    <p class="subtexto">Responsável pelo atendimento ao cliente, organização do estoque e cadastro de produtos.</p>
    <hr />
    <h3>Educação</h3>
    <p>ETEC Dra. Ruth Cardoso - Técnico em Desenvolvimento de Sistemas - JUL/2022 - DEZ/2023</p>
    <p>E.E Albino Luiz Caldas - Ensino Médio - DEZ/2017</p>
    <hr />
    <h3>Habilidades</h3>
    <p>HTML, CSS, JS, PHP, MySQL, C#.</p>
</div>

}

export default App