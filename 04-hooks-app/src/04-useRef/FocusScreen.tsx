import { useRef } from "react";

export function FocusScreen() {

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    inputRef.current?.select();
  }

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-xl-2 font-thin text-white">Focus screen</h1>

      <input
        ref={inputRef}
        type="text"
        className="bg-white text-black px-4 py-2 rounded-md"
        autoFocus
      />

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={handleClick}>
        Set focus
      </button>
    </div>
  );
}
