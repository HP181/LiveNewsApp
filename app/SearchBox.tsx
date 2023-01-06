"use client";

import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

const SearchBox = () => {
  const [Input, setInput] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!Input) return;

    router.push(`/search?term=${Input}`);
    setInput("");
  };

  return (
    <form
      className="max-w-6xl mx-auto flex justify-between items-center px-5"
      onSubmit={handleSubmit}
    >
      <input
        className="flex-1 w-full h-14 p-3 rounded-sm placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-orange-400"
        type="text"
        placeholder="Search Keywords..."
        onChange={(e) => setInput(e.target.value)}
        name=""
        id=""
      />

      <button
        type="submit"
        disabled={!Input}
        className="text-orange-400 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
