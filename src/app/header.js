

export default function Header() {
    return (
        <header className="flex p-4 bg-amber-500">
            <div className="flex items-center gap-4 container mx-auto justify-between text-gray-800">
                <h1 className="text-2xl">
                    <a href="/">
                        <span className="extra-bold">TETRA</span><span className="font-bold">CACHE</span>
                    </a>
                </h1>
                <nav className="flex gap-4">
                    <ul className="flex gap-4">
                        <li>
                            <a href="/" className="hover:underline">
                                Docs
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="hover:underline">
                                Installation
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="hover:underline">
                                FAQ
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
