export default function DetalhesPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center text-gray-500">
          [ Foto do Animal ]
        </div>
        <div>
          <h1 className="text-3xl font-bold text-emerald-900">Dragão Barbudo (Pogona)</h1>
          <p className="text-gray-600 italic mb-4">Pogona vitticeps</p>
          <div className="bg-emerald-50 p-4 rounded-md mb-6">
            <h2 className="font-bold text-emerald-800">Ficha Técnica:</h2>
            <ul className="text-sm space-y-1 mt-2">
              <li><strong>Origem:</strong> Austrália (Cativeiro Legalizado)</li>
              <li><strong>Dieta:</strong> Insetos e Vegetais</li>
              <li><strong>Temperamento:</strong> Dócil</li>
            </ul>
          </div>
          <p className="text-2xl font-bold text-orange-600 mb-4">R$ 1.800,00</p>
          <button className="w-full bg-emerald-700 text-white py-3 rounded-lg font-bold">
            Consultar Disponibilidade
          </button>
        </div>
      </div>
    </div>
  )
}