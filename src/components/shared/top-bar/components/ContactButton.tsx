interface Props {
  Icon: React.ElementType;
  iconSize: string;
  label: string;
  link: string;
}

const ContactButton: React.FC<Props> = ({ Icon, iconSize, label, link }) => (
  <a className="text-xs flex gap-1 items-center" href={link} target="_blank">
    <Icon className={iconSize} />
    {label}
  </a>
);

export default ContactButton;
