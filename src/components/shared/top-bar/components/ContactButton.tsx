interface Props {
  Icon: React.ElementType;
  iconSize: string;
  label: string;
  link: string;
}

const ContactButton: React.FC<Props> = ({ Icon, iconSize, label, link }) => (
  <a className="text-sm flex gap-1" href={link} target="_blank">
    <Icon className={iconSize} />
    {label}
  </a>
);

export default ContactButton;
