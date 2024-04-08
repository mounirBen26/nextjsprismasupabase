import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center cursor-pointer  p-24 ">
        <Link className="hover:text-blue-500 font-bold" href="/login">Login</Link>
        <p>Don't have an account? <Link className="hover:font-bold text-red-500" href="pages/register">Register</Link></p>

    </main>
  );
}
