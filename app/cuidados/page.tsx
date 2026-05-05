export default function CuidadosPage() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-emerald-900 mb-6">Guia de Manejo</h1>
      <article className="prose lg:prose-xl">
        <section className="mb-8">
          <h2 className="text-xl font-bold text-orange-700">1. Iluminação e Aquecimento</h2>
          <p className="text-gray-700">Répteis são ectotérmicos. Você precisa garantir um gradiente térmico no terrário, com uma zona quente e uma zona fria.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold text-orange-700">2. Alimentação Correta</h2>
          <p className="text-gray-700">Nunca esqueça do suplemento de Cálcio + D3. Sem isso, o animal pode desenvolver Doença Metabólica Óssea.</p>
        </section>
      </article>
    </div>
  )
}