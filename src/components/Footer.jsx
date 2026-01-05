import { Send, Instagram, X } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 py-10">
      <div className="flex flex-col items-center gap-4">

        {/* CONNECT TEXT */}
        <p className="text-slate-300 text-sm tracking-wide">
          Let’s connect on social media
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex gap-6">
          <a
            href="https://t.me/sophia_fxsignal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-400 transition-colors"
            aria-label="Telegram"
          >
            <Send size={20} />
          </a>

          <a
            href="https://x.com/sophia_lawson00"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-400 transition-colors"
            aria-label="X"
          >
            <X size={20} />
          </a>

          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-400 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-center text-slate-500 text-sm">
          © {year} Sophia Lawson. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
