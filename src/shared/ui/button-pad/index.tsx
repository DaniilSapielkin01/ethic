type ButtonPad = {
  value?: string;
  onClick(value?: string): void;
  children: React.ReactNode;
};

export const ButtonPad = ({ value, onClick, children }: ButtonPad) => {
  return (
    <button
      key={value}
      onClick={() => onClick(value)}
      className="dial-key flex flex-col items-center justify-center h-[60px] border border-white/20 bg-transparent cursor-pointer select-none transition-all duration-100"
    >
      {children}
    </button>
  );
};
