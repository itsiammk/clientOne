import Link from "next/link";
import React from "react";

const Item = ({ Links, title }) => {
  return (
    <ul>
      <div className="mb-1 font-semibold">{title}</div>
      {Links.map((link) => (
        <li key={link.name}>
          <Link
            className="text-gray-400 hover:text-indigo-400 duration-300
          text-sm cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Item;