import {
  faGithub,
  faLinkedinIn,
  faTwitter,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SocialLinks = () => {
  return (
    <ul className="flex space-x-4">
      <SocialLink
        href="https://www.linkedin.com/in/sean-barker/"
        label="LinkedIn"
        icon={faLinkedinIn}
      />
      <SocialLink
        href="https://twitter.com/seanbarkerdev"
        label="Twitter"
        icon={faTwitter}
      />
      <SocialLink
        href="https://github.com/seanbarker182"
        label="GitHub"
        icon={faGithub}
      />
    </ul>
  );
};

type SocialLinkProps = {
  icon: IconDefinition;
  href: string;
  label: string;
};
const SocialLink: React.FC<SocialLinkProps> = ({ icon, href, label }) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer">
        <span className="sr-only">{label}</span>
        <FontAwesomeIcon
          icon={icon}
          className="w-8 text-slate-50 text-opacity-50 hover:text-opacity-100"
        />
      </a>
    </li>
  );
};
