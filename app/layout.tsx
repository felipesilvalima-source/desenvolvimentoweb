import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'SANGUEFRIO - Sangue Frio',
  description: 'Sua loja de répteis e anfíbios',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-stone-50 text-stone-900 flex flex-col min-h-screen">
        
        {/* BARRA DE DESTAQUE */}
        <div className="bg-sauro-laranja text-white text-[10px] md:text-xs py-1.5 text-center font-bold uppercase tracking-widest">
          🚚 Envio especializado para todo o Brasil com GTA e Nota Fiscal
        </div>

        {/* HEADER / NAVEGAÇÃO */}
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200">
          <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="text-2xl font-black text-sauro-verde tracking-tighter">
              Sangue<span className="text-sauro-laranja">Frio</span>
            </Link>
            
            <nav className="flex gap-6 text-sm font-bold text-stone-600 uppercase tracking-tight">
              <Link href="/animais" className="hover:text-sauro-laranja transition">Animais</Link>
              <Link href="/terrarios" className="hover:text-sauro-laranja transition">Terrários</Link>
              <Link href="/cuidados" className="hover:text-sauro-laranja transition">Guia de Manejo</Link>
              <Link href="/contato" className="hover:text-sauro-laranja transition">Contato</Link>
            </nav>

            <div className="flex items-center gap-4">
              {/* BOTÃO DE LOGIN ATUALIZADO */}
              <Link href="/login">
                <button className="bg-sauro-verde text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-opacity-90 transition shadow-md">
                  LOGIN / MINHA CONTA
                </button>
              </Link>
            </div>
          </div>
        </header>

        {/* CONTEÚDO PRINCIPAL */}
        <main className="flex-grow">
          {children}
        </main>

        {/* FOOTER (RODAPÉ) */}
        <footer className="bg-stone-900 text-stone-400 pt-12 pb-6">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg italic">SANGUE FRIO</h3>
              <p className="text-sm">
                Especialistas em répteis e anfíbios. Focados no bem-estar animal e na legalidade total.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Links Úteis</h4>
              <ul className="text-sm space-y-2">
                <li><Link href="/cuidados" className="hover:text-white">Como cuidar do seu pet</Link></li>
                <li><Link href="/contato" className="hover:text-white">Dúvidas sobre Frete</Link></li>
                <li><Link href="/login" className="hover:text-white">Área do Cliente</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Atendimento</h4>
              <p className="text-sm italic font-bold text-sauro-laranja">Segunda a Sexta: 09h às 18h</p>
              <p className="text-sm mt-2">WhatsApp: (11) 9999-9999</p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Siga-nos</h4>
              <div className="flex gap-4 text-xs font-bold text-white">
                <span className="bg-stone-800 p-2 rounded hover:bg-sauro-laranja cursor-pointer">INSTA</span>
                <span className="bg-stone-800 p-2 rounded hover:bg-sauro-laranja cursor-pointer">FACE</span>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 mt-12 pt-6 border-t border-stone-800 text-center">
            <p className="text-xs uppercase tracking-widest">
              © 2026 SANGUE FRIO EXÓTICOS - Criatórios Registrados IBAMA/SIMPAS
            </p>
          </div>
        </footer>

      </body>
    </html>
  )
}