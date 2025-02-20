import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between items-center py-4 px-8 border-b-2 border-gray-200">
            <div className="flex gap-4">
                <Link href="/">홈</Link>
                <Link href="/find">찾기</Link>
                <Link href="/none">None</Link>
            </div>
            <Link href="/login">로그인</Link>
        </header>
    );
}
