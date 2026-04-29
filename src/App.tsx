import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agendamento from "./pages/Agendamento";
import Contato from "./pages/Contato";
import Layout from "./components/layout/Layout";
import Catalogo from "./components/Catalogo";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/catalogo" element={<Catalogo />} />
      </Routes>
    </Layout>
  );
}
