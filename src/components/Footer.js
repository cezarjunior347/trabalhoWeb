import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>Telefone: (11) 99999-9999</p>
      <p>Email: contato@technova.com</p>
      <p>&copy; {new Date().getFullYear()} TechNova. Todos os direitos reservados.</p>
    </footer>
  );
}
