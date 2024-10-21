

export default function Header() {
    return (
        <header className="flex p-4 bg-amber-500">
            <div className="md:sflex items-center gap-4 container mx-auto justify-between text-gray-800">
                <a href="/" className="flex items-center gap-4">
                    <h1 className="text-2xl flex flex-col">
                        <p><span className="extra-bold">tetro</span><span className="font-bold">flow</span></p>
                    </h1>
                </a>
                <nav className="flex gap-4">
                    <ul className="flex gap-12">
                        <li>
                            <a href="/docs" className="hover:underline">Docs</a>
                        </li>
                        <li>
                            <a href="/about" className="hover:underline">Installation</a>
                        </li>
                        <li>
                            <a href="//github.com/dikovmaxim/tetroflow" className="hover:underline" target="_blank">GitHub</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
