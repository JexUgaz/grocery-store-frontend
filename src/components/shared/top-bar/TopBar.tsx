import EmailIcon from "@/components/icons/EmailIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import ContactButton from "./components/ContactButton";
import SocialMedia from "./components/SocialMedia";

const TopBar = () => (
  <aside className="w-full bg-secondary flex items-center justify-between px-10 text-white py-2 ">
    <div className="flex items-center gap-5">
      <ContactButton
        Icon={EmailIcon}
        iconSize="size-4"
        label="info@grocerystore.com"
        link="mailto:info@grocerystore.com"
      />

      <ContactButton
        Icon={PhoneIcon}
        iconSize="size-5"
        label="+51 970 149 453"
        link="tel:+51970149453"
      />
    </div>
    <div className="flex items-center gap-1">
      <SocialMedia Icon={LinkedinIcon} link="#" />
      <SocialMedia Icon={InstagramIcon} link="#" />
      <SocialMedia Icon={FacebookIcon} link="#" />
    </div>
  </aside>
);
export default TopBar;
