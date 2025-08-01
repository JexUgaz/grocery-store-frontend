interface Props {
  Icon: React.ElementType;
  link: string;
}

const SocialMedia: React.FC<Props> = ({ Icon, link }) => (
  <a href={link} target="_blank">
    <Icon className="size-5" />
  </a>
);

export default SocialMedia;
