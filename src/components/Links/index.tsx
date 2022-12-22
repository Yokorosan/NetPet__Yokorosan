import { Links } from "./style";

interface iLinksProps {
  variant?: string;
  children: React.ReactNode;
  to: string;
  className?: string;
}

const Link = ({ variant, children, to, className }: iLinksProps) => (
  <Links to={to} variant={variant} className={className}>
    {children}
  </Links>
);

export default Link;
