import { useState } from "react";
import Hero from "../components/Hero";
import Sobre from "../components/Sobre";
import Servicos from "../components/Servicos";
import Agendamento from "../components/Agendamento";
import Contato from "./Contato";

export default function Home() {
    // Estado para guardar qual serviço foi selecionado
    const [servicoSelecionado, setServicoSelecionado] = useState<string>('');

    // Função que será passada para o componente Servicos
    const handleSelectServico = (slug: string) => {
        setServicoSelecionado(slug);
        
        // Rola a página suavemente até a seção de agendamento
        const agendamentoSection = document.getElementById('agendamento');
        if (agendamentoSection) {
            agendamentoSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <Hero />
            <Sobre />
            
            {/* Passamos a função para o componente Serviços */}
            <Servicos onSelectServico={handleSelectServico} />
            
            {/* Passamos o estado para o componente Agendamento */}
            <Agendamento slugSelecionado={servicoSelecionado} />
            
            <Contato />
        </div>
    )
}