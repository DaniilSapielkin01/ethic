import { DIAL_KEYS } from "@/shared/constants";
import { ButtonPad } from "@/shared/ui";

import StarIcon from "@/shared/assets/symbols/star.svg?react";
import PoundIcon from "@/shared/assets/symbols/pound.svg?react";
import DeleteIcon from "@/shared/assets/symbols/delete.svg?react";

type DialPad = {
  digits: string;
  onAdd: (key: string) => void;
  onDelete: () => void;
};

export const DialPad = ({ digits, onAdd, onDelete }: DialPad) => (
  <div>
    {/* Input display */}
    <div
      className="flex items-center justify-center relative gap-4 py-3 min-h-20"
      style={{ background: "linear-gradient(to right, #2ec4b6, #4e8ef7)" }}
    >
      {digits && (
        <>
          <span className="text-white font-light text-[40px] absolute left-1/2 -translate-x-1/2 tracking-[0.1em]">
            {digits}
          </span>
          <button
            onClick={onDelete}
            className="absolute right-6 text-white opacity-80 hover:opacity-100 transition-opacity "
          >
            <DeleteIcon width={21} />
          </button>
        </>
      )}
    </div>

    {/* Keys */}
    <div
      className="grid grid-cols-3"
      style={{
        background: "linear-gradient(180deg, #3d5afe 0%, #5b6ef5 100%)",
      }}
    >
      {DIAL_KEYS.map(({ key, sub }) => (
        <ButtonPad value={key} onClick={onAdd}>
          <span className="text-white font-light text-[28px] leading-none">
            {key === "*" ? (
              <StarIcon width={16} />
            ) : key === "#" ? (
              <PoundIcon width={16} />
            ) : (
              key
            )}
          </span>
          {sub && (
            <span className="text-white uppercase text-[9px] opacity-75 mt-0.5 tracking-[0.2em]">
              {sub}
            </span>
          )}
        </ButtonPad>
      ))}
    </div>
  </div>
);
