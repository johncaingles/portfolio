import React from "react";
import SocialsIcon from "./SocialsIcon";
export function Footer({}) {
  return (
    <footer className="flex py-8 px-0 border-t border-x-gray-500 justify-center items-center">
      <ul className="flex flex-row justify-center items-center">
        <SocialsIcon
          type="linkedin"
          link="https://www.linkedin.com/in/johncaingles/"
        />
        <SocialsIcon type="github" link="https://github.com/johncaingles" />
        <SocialsIcon
          type="facebook"
          link="https://www.facebook.com/johncaingles/"
        />
        <SocialsIcon
          type="instagram"
          link="https://www.instagram.com/johncaingles/"
        />
      </ul>
    </footer>
  );
}
