import Link from 'next/link';

export default function Navbar () {
  return (
    <>
      <div className="flex justify-center bg-black text-xl p-10">
        <Link href="/">Jason Chalangary</Link>
      </div>
    </>
  );
};
