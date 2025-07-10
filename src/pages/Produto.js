import { useEffect, useState } from "react";
import CardProduto from "../components/CardProduto";
import "../styles/Produto.css";

export default function Produto() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => {
        setProdutos(data);
        setCarregando(false);
      })
      .catch(() => setCarregando(false));
  }, []);

  return (
    <section className="produtos">
      <h1>Nossos Produtos</h1>
      {carregando ? (
        <p>Carregando produtos...</p>
      ) : (
        <div className="produtos-grid">
          {produtos.map((produto) => (
            <CardProduto key={produto.id} produto={produto} />
          ))}
        </div>
      )}
    </section>
  );
}
