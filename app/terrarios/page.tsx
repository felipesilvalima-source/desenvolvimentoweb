import Link from 'next/link';

export default function Home() {
  const destaques = [
    { id: 1, nome: "Pogona Vitticeps", preco: "1.800", categoria: "Répteis", cor: "bg-orange-500" },
    { id: 2, nome: "Gecko Leopard", preco: "850", categoria: "Répteis", cor: "bg-yellow-500" },
    { id: 3, nome: "Terrário Safari G", preco: "1.200", categoria: "Equipamentos", cor: "bg-emerald-600" },
    { id: 4, nome: "Jiboia Arco-Íris", preco: "3.200", categoria: "Cobras", cor: "bg-red-500" },
  ];

  return (
    <div>
      {/* SEÇÃO HERO - O GRANDE DESTAQUE */}
      <section className="relative h-[500px] bg-stone-900 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504450874802-0ba2bcd9b5ae?q=80&w=2000')] bg-cover bg-center opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">Novidade no Criatório</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-none">
              MUNDO DOS <br /> <span className="text-emerald-500">EXÓTICOS</span>
            </h1>
            <p className="text-stone-300 text-lg mb-8">
              Explore a maior variedade de répteis, anfíbios e equipamentos com procedência garantida e nota fiscal.
            </p>
            <div className="flex gap-4">
              <Link href="/animais" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold transition shadow-lg shadow-emerald-900/20">
                Ver Animais
              </Link>
              <Link href="/terrarios" className="bg-white hover:bg-stone-100 text-stone-900 px-8 py-4 rounded-full font-bold transition">
                Equipamentos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE CATEGORIAS RÁPIDAS */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Serpentes', 'Lagartos', 'Tartarugas', 'Anfíbios'].map((cat) => (
              <div key={cat} className="group cursor-pointer border border-stone-200 p-6 rounded-2xl text-center hover:border-emerald-500 hover:bg-emerald-50 transition">
                <div className="w-12 h-12 bg-stone-100 rounded-full mx-auto mb-3 group-hover:bg-emerald-200 flex items-center justify-center text-2xl"></div>
                <span className="font-bold text-stone-700">{cat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VITRINE DE PRODUTOS EM DESTAQUE */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-black text-stone-800">DESTAQUES DA SEMANA</h2>
            <div className="h-1 w-20 bg-orange-500 mt-2"></div>
          </div>
          <Link href="/animais" className="text-emerald-600 font-bold hover:underline">Ver tudo →</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destaques.map((prod) => (
            <div key={prod.id} className="group relative bg-white rounded-3xl border border-stone-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className={`h-64 ${prod.cor} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition"></div>
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[10px] font-black px-3 py-1 rounded-full">
                  {prod.categoria}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-stone-800 mb-1">{prod.nome}</h3>
                <p className="text-stone-500 text-sm mb-4">Disponível para envio imediato</p>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xs text-stone-400 block uppercase font-bold">Preço</span>
                    <span className="text-2xl font-black text-emerald-700">R$ {prod.preco}</span>
                  </div>
                  <Link href="/detalhes">
                    <button className="bg-stone-900 text-white p-3 rounded-2xl hover:bg-emerald-600 transition shadow-lg">
                      →
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BANNER INSTITUCIONAL */}
      <section className="container mx-auto px-4 pb-20">
        <div className="bg-emerald-900 rounded-[40px] p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Dúvidas sobre a legalização?</h2>
              <p className="text-emerald-200 mb-8 max-w-lg mx-auto">Todos os nossos animais possuem microchip ou anilha, acompanhados de nota fiscal e guia de transporte.</p>
              <Link href="/contato" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold transition">
                Falar com Especialista
              </Link>
            </div>
        </div>
      </section>
    </div>
  );
}