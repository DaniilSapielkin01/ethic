const COLORS = [
  "#FF6B6B",
  "#FF8E53",
  "#FFC045",
  "#56E39F",
  "#4ECDC4",
  "#45B7D1",
  "#A78BFA",
  "#F59E0B",
  "#10B981",
  "#3B82F6",
  "#8B5CF6",
  "#EC4899",
];

// Set avatar color if no img
export const nameToColor = () => {
  return COLORS[Math.floor(Math.random() % COLORS.length)];
};
