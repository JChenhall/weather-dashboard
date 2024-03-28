import Image from "next/image";

export const Background: React.FC = () => {
  return (
    <div className="h-full left-0 overflow-hidden fixed top-0 w-full z-0">
      <Image
        src={"/abstract3.png"}
        alt={"home screen"}
        width={960}
        height={640}
        className={`w-full h-full object-cover `}
      />
    </div>
  );
};
