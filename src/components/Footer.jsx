export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 py-6">
      <p className="text-center text-slate-400 text-sm">
        © {year} Sophia Lawson. All rights reserved.
      </p>
    </footer>
  );
}
