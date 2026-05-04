export default function Footer() {
  return (
    <footer
      className="py-8 mt-4 border-t text-center"
      style={{ borderColor: "var(--border)" }}
    >
      <p className="text-xs font-medium" style={{ color: "var(--text-3)" }}>
        © {new Date().getFullYear()} Anurag Singh. All rights reserved.
      </p>
    </footer>
  );
}
