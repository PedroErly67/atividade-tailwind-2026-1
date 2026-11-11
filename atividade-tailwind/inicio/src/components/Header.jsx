const links = [
  { href: '#inicio', texto: 'Início' },
  { href: '#cardapio', texto: 'Cardápio' },
  { href: '#sobre', texto: 'Sobre' },
  { href: '#contato', texto: 'Contato' },
]

// EXERCÍCIO 2: barra de navegação
export default function Header() {
  return (
    <header className="bg-amber-500 shadow-2xl sticky top-0 z-10">
      <nav className="max-w-6x1 mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-amber-700">☕ Grão Dourado</a>
        <ul className="flex gap-6 hidden md:flex">
          {links.map((link) => (
            <li className="font-medium hover: text-amber-700 transition-colors" key={link.href}>
              <a href={link.href}>{link.texto}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
