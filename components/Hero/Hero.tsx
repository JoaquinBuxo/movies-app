import Image from "next/image";

type Props = {
  imgUrl: string;
  title: string;
  text: string;
};

const Hero = ({ imgUrl, title, text }: Props) => (
  <div className="relative w-full h-128">
    <div className="absolute z-10 w-full h-full bg-slate-600 opacity-30"></div>
    <div className="relative flex flex-col-reverse h-full max-w-7xl m-auto z-20 pb-12 text-center md:text-left">
      <div className="text-white max-w-2xl px-4">
        <h2 className="text-2xl md:text-5xl font-bold pb-8">{title}</h2>
        <p className="text-lg md:text-xl">{text}</p>
      </div>
    </div>
    <Image
      priority
      objectFit="cover"
      objectPosition="top center"
      layout="fill"
      src={imgUrl}
      alt="Hero Image"
    />
  </div>
);

export default Hero;
