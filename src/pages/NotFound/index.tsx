import turtle from "../../assets/img/Tartaruga.png";
import Link from "../../components/Links";
import { DivNotFound } from "./style";

export const NotFound = () => (
  <DivNotFound>
    <div className="div404">
      <h1>4</h1>
      <img src={turtle} alt="Imagem de tartaruga" />
      <h1>4</h1>
    </div>
    <div className="divTextError">
      <h2>Ooops...</h2>
      <p>Page not found</p>
    </div>
    <span>A página que você está procurando não pode ser encontrada.</span>
    <Link to="/" variant="LinkPrimary">
      Voltar para Home
    </Link>
  </DivNotFound>
);
