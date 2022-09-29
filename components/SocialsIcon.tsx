import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";

const SocialsIcon = ({ type, link }: { type: IconName; link: string }) => {
  return (
    <li className="list-none mx-2 w-16">
      <a href={link}>
        <FontAwesomeIcon icon={["fab", type]} />
      </a>
    </li>
  );
};

export default SocialsIcon;
