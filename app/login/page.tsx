export default function Login() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-sauro-verde uppercase tracking-tighter">
            Área do <span className="text-sauro-laranja">Criador</span>
          </h2>
          <p className="text-gray-500 text-sm mt-2 font-medium">
            Entre com suas credenciais da Sangue Frio
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-xs font-black text-sauro-verde uppercase mb-2 ml-1">E-mail</label>
            <input 
              type="email" 
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-sauro-laranja transition-all"
              placeholder="exemplo@email.com"
            />
          </div>

          <div>
            <label className="block text-xs font-black text-sauro-verde uppercase mb-2 ml-1">Senha</label>
            <input 
              type="password" 
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-sauro-laranja transition-all"
              placeholder="••••••••"
            />
          </div>

          <button className="w-full bg-sauro-verde text-white font-bold py-4 rounded-2xl hover:bg-sauro-laranja transition-all shadow-lg transform hover:-translate-y-1">
            ENTRAR NO SISTEMA
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-400">Esqueceu a senha? </span>
          <button className="text-sauro-verde font-bold hover:underline">Clique aqui</button>
        </div>
      </div>
    </div>
  );
}