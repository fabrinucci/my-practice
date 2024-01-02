import Link from "next/link";
export const ConnectButton = ({ children, href }) => {
  return (
    <Link
      href={href}
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full text-center min-w-32 mx-auto my-auto whitespace-nowrap shadow-lg"
    >
      {children}
    </Link>
  );
};
