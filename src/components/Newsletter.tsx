"use client";

import { useState, type FormEvent } from "react";

export default function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubscribed(true);
  };

  if (subscribed) {
    return (
      <p className="mt-3.5 text-sm font-semibold text-saffron">
        Thanks for subscribing! ♡
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-3.5 flex gap-2">
      <input
        type="email"
        required
        placeholder="Your email"
        aria-label="Your email"
        className="min-w-0 flex-1 rounded-[10px] border border-white/12 bg-white/8 px-3.5 py-3 text-[13px] text-white outline-none placeholder:text-white/40 focus:border-saffron"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="cursor-pointer rounded-[10px] border-none bg-saffron px-4.5 text-[13px] font-bold text-white transition-transform duration-200 hover:scale-105"
      >
        →
      </button>
    </form>
  );
}
