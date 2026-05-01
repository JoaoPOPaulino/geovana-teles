import { useNavigate } from "react-router-dom";
import Servicos from "../components/Servicos";

export default function ServicosPage() {
  const navigate = useNavigate();

  const handleSelectServico = (slug: string) => {
    navigate(`/agendamento?servico=${slug}`);
  };

  return (
    <main className="pt-24">
      <Servicos onSelectServico={handleSelectServico} />
    </main>
  );
}
