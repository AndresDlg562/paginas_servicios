import Image from 'next/image';

export default function NavBar() {
    return (
        <nav className="flex items-center justify-between w-full h-16 px-8 bg-foreground text-background">
            <ul className="flex gap-4 justify-evenly items-center w-full">
                <li>
                    <a href="/" title="Logo">
                        <Image
                            src="/logo.svg"
                            width={40}
                            height={40}
                            alt="logo"
                        />
                    </a>
                </li>
                <li>
                    <a href="/" className="hover:underline">Home</a>
                </li>
                <li>
                    <a href="/page1" className="hover:underline">Pag1</a>
                </li>
                <li>
                    <a href="/page2" className="hover:underline">Pag2</a>
                </li>
            </ul>
        </nav>
    );

}