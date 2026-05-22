import Image from "next/image";

export const FloatingCard = ({ src }) => {
  return (
    <div
      className={
        "w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 shadow-xl "
      }
    >
      <Image
        src={src}
        alt="testimonial"
        fill
        className="object-cover"
        sizes="(max-width: 640px) 112px,
               (max-width: 768px) 144px,
               160px"
      />
    </div>
  );
};
