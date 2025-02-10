import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-center items-center py-4 border-b-2 border-gray-200 gap-4">
            <Link href="/">메인</Link>
            <Link href="/find">찾기</Link>
            <Link href="/none">None</Link>
        </header>
    );
}
