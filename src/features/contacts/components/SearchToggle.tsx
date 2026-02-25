type SearchToggleProps = { byName: boolean; onToggle: () => void };

export const SearchToggle = ({ byName, onToggle }: SearchToggleProps) => (
  <div className="flex items-center justify-center gap-3 mb-6">
    <span
      className={`text-white font-medium text-sm ${
        byName ? "opacity-100" : "opacity-60"
      }`}
    >
      By name
    </span>

    <button
      onClick={onToggle}
      className={`relative  w-14 h-8 rounded-full transition-all duration-300 border-2 ${
        byName
          ? "border-white bg-transparent"
          : "border-transparent bg-[#3d2bb5]"
      }`}
      aria-label="toggle search"
    >
      <div
        className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ${
          byName ? "left-0.5" : "left-[27px]"
        }`}
      />
    </button>

    <span
      className={`text-white font-medium text-sm ${
        byName ? "opacity-60" : "opacity-100"
      }`}
    >
      By number
    </span>
  </div>
);
