interface Props {
  className?: string;
  title: string;
  children: React.ReactNode;
}

const SectionView: React.FC<Props> = ({
  children,
  title,
  className = "gap-8 text-accent",
}) => (
  <div
    className={`w-full overflow-x-hidden flex flex-col items-center sm:items-start justify-center ${className}`}
  >
    <h2 className="sm:ml-20 lg:ml-0 text-2xl font-extrabold">{title}</h2>
    {children}
  </div>
);

export default SectionView;
