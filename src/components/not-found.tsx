import Image from "next/image";

export const NotFoundResults = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Image
        src="/assets/not-found-desk.png"
        width={256}
        height={256}
        alt="not found"
        className="hidden md:block"
      />
      <Image
        src="/assets/not-found-mobile.png"
        width={128}
        height={128}
        alt="not found"
        className="block md:hidden"
      />
    </div>
  );
};
