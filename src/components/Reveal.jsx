import { useInView } from "@/hooks/useInView";

/** Fades & lifts its children into view on scroll. */
export function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "in" : ""} ${className}`}
      style={{ "--d": `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
