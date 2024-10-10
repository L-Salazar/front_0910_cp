export default function Header() {
    return (
        <header className="bg-blue-600 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Portal de Notícias</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="/" className="hover:text-gray-200">Home</a>
                        </li>
                        <li>
                            <a href="/sobre" className="hover:text-gray-200">Sobre</a>
                        </li>
                        <li>
                            <a href="/contato" className="hover:text-gray-200">Contato</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
