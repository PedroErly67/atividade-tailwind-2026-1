// EXERCÍCIO 4 (parte 2): card de um produto
export default function CardProduto({ nome, preco, descricao, imagem }) {
  return (
    <article className="bg-white rounded-2x1 shadow-md overflow-hidden hover:shadow-x1 hover:-translate-y-1 transition-duration-300">
      <img src={imagem} alt={nome} className="w-full h-48 object-cover"/>
      <div className="p-5">
        <div className="flex justify-between items-center">
          <h3 className="text-x1 font-semibold">{nome}</h3>
          <span className="br-amber-100 text-amber-800 text-sm font-bold px-3 py1 rounded-full">{preco}</span>
        </div>
        <p className="mt-2 text-stone-600 text-sm">{descricao}</p>
      </div>
    </article>
  )
}
