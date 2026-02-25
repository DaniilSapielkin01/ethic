import { useState, useCallback, useEffect } from "react";

export const useDialInput = () => {
  const [digits, setDigits] = useState("");

  // handlers
  const addDigit = useCallback((key: string) => {
    setDigits((prev) => (prev.length >= 10 ? prev : prev + key));
  }, []);

  const deleteDigit = useCallback(
    () => setDigits((prev) => prev.slice(0, -1)),
    []
  );

  const reset = useCallback(() => setDigits(""), []);

  // hooks for work with keyboard Event
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Backspace") deleteDigit();
      else if (/^[0-9*#]$/.test(e.key)) addDigit(e.key);
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [addDigit, deleteDigit]);

  return { digits, addDigit, deleteDigit, reset };
};
