import Link from "next/link";

type Props = {
  title: string;
};

const Breadcrumb = ({ title }: Props) => (
  <div className="bg-zinc-800">
    <div className="flex items-center max-w-7xl p-4 text-white text-lg">
      <Link href="/">
        <div className="hover:opacity-80 cursor-pointer duration-300">Home</div>
      </Link>
      <div className="block px-2">|</div>
      <div className="font-bold truncate">{title}</div>
    </div>
  </div>
);

export default Breadcrumb;
