import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <Link
        href="/rooms/hub"
        className="px-8 py-4 text-2xl font-bold text-white bg-blue-600 rounded hover:bg-blue-700"
      >
        Enter H4LO 3D Store
      </Link>
    </div>
  );
}
