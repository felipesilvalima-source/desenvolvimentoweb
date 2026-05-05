import Link from 'next/link';

export default function AnimaisPage() {
 
 const listaAnimais = [
  { id: 1, nome: "Pogona (Dragão Barbudo)", preco: "R$ 9.000", imagem: "/pogona.jpg" },
  { id: 2, nome: "Gecko Leopard", preco: "R$ 1800", imagem: "/gecko.jpg" },
  { id: 3, nome: "Jiboia Verde", preco: "R$ 1.500", imagem: "/jiboia.jpg" },
  { id: 4, nome: "Cálcio com D3", preco: "R$ 125", imagem: "/CALCIO.png" },
   { id: 5, nome: "Jiboia (Arco Ìris)", preco: "R$ 1.800", imagem: "/pogona.jpg" },
  { id: 6, nome: "Gecko ", preco: "R$ 600", imagem: "/gecko.jpg" },
  { id: 7, nome: "Sapo(Pac Man)", preco: "R$ 850", imagem: "/jiboia.jpg" },
  { id: 8, nome: "Cálcio com D3", preco: "R$ 85", imagem: "/CALCIO.png" },
    { id: 9, nome: "Perereca", preco: "R$ 200", imagem: "/jiboia.jpg" }, 
];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {listaAnimais.map((animal) => (
    <div key={animal.id} className="border border-gray-100 rounded-2xl p-4 shadow-md bg-white group">
      
      {/* Container da Imagem */}
      <div className="h-56 rounded-xl overflow-hidden mb-4 bg-gray-50">
        <img 
          src={animal.imagem}  /* <-- Aqui ele pega a foto de cada animal da lista */
          alt={animal.nome} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Informações */}
      <h2 className="text-xl font-bold text-sauro-verde">{animal.nome}</h2>
      <p className="text-sauro-laranja font-black text-2xl mt-1">{animal.preco}</p>
      
      <Link href="/detalhes">
        <button className="mt-4 w-full bg-sauro-verde text-white py-3 rounded-xl font-bold hover:bg-sauro-laranja transition-all shadow-lg">
          Ver Detalhes
        </button>
      </Link>
    </div>
  ))}
</div>
  );
}