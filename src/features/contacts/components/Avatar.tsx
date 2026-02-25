import { nameToColor } from "@/shared/constants/nameToColor";
import { initialName } from "@/shared/utils";

type Avatar = { name: string; image?: string };

export const Avatar = ({ name, image }: Avatar) => {
  if (image)
    return (
      <img
        src={image}
        alt={name}
        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
      />
    );

  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm"
      style={{ background: nameToColor() }}
    >
      {initialName(name)}
    </div>
  );
};
