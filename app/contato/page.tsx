export default function ContatoPage() {
  return (
    <div className="max-w-md mx-auto p-8 border my-10 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Fale com a DaSilvaSauro</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Nome:</label>
          <input type="text" className="w-full border p-2 rounded mt-1 outline-emerald-500" placeholder="Seu nome completo" />
        </div>
        <div>
          <label className="block text-sm font-medium">Assunto:</label>
          <select className="w-full border p-2 rounded mt-1">
            <option>Dúvida sobre animal</option>
            <option>Status do pedido</option>
            <option>Outros</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Mensagem:</label>
          <textarea className="w-full border p-2 rounded mt-1 h-32"></textarea>
        </div>
        <button type="button" className="w-full bg-emerald-800 text-white py-3 rounded-lg font-bold hover:bg-emerald-900 transition">
          Enviar Mensagem
        </button>
      </form>
    </div>
  )
}