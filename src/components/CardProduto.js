import "../styles/CardProduto.css";

export default function CardProduto({ produto }) {
  return (
    <div className="card-produto">
      <h3>{produto.title}</h3>
      <p>{produto.description}</p>
      <p><strong>Preço:</strong> R$ {produto.price}</p>
    </div>
  );
}
