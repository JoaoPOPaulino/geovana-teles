import Agendamento from "../components/Agendamento";
import Hero from "../components/Hero";
import Servicos from "../components/Servicos";
import Sobre from "../components/Sobre";
import Contato from "./Contato";

export default function Home() {
    return (
        <div>
            <Hero />
            <Sobre />
            <Servicos />
            <Agendamento />
            <Contato />
        </div>
    )
}