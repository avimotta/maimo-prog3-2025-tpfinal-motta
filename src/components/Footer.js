"use client";

export default function Footer() {
  return (
    <footer
      className="
        w-full 
        bg-[#0A0BF9] 
        text-[#fffeec] 
        mt-12 
        border-t-2 border-[#090808]
        shadow-[0_4px_0_0_rgba(9,8,8,1)_inset]
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-6 text-center">
        <p className="font-semibold tracking-wide">
          © {new Date().getFullYear()} JukeBox — Made with ❤️ in Buenos Aires
        </p>

        <div className="mt-4 flex items-center justify-center gap-6 text-sm">
          <a>About</a>
          <a>Contact</a>
          <a>Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
