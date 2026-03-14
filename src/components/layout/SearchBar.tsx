"use client";

export default function SearchBar() {
  return (
    <form
      className="relative"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        placeholder="Search"
        className="w-[230px] h-[45px] rounded-full bg-white/30 text-white placeholder:text-white/70 pl-4 pr-12 text-base font-light border-none focus:outline-none focus:bg-white/40 transition-colors"
      />
      <button
        type="submit"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-[31px] h-[31px] rounded-full bg-primary/30 bg-[url('/images/icons/search-bar.png')] bg-no-repeat bg-center border-none"
        aria-label="Search"
      />
    </form>
  );
}
