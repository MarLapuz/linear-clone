import { FC } from "react";
import { Container } from "./container";
import { Logo } from "./icons/logo";
import Link from "next/link";
import { TwitterIcon } from "./icons/twitter";
import { GithubIcon } from "./icons/github";
import { SlackIcon } from "./icons/slack";

const footerLinks = [
  {
    title: "Product",
    links: [
      { title: "Features", href: "#" },
      { title: "Integrations", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Changelog", href: "#" },
      { title: "Docs", href: "#" },
      { title: "Linear Method", href: "#" },
      { title: "Download", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About us", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Brand", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Community", href: "#" },
      { title: "Contact", href: "#" },
      { title: "DPA", href: "#" },
      { title: "Terms of service", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { title: "API", href: "#" },
      { title: "Status", href: "#" },
      { title: "GitHub", href: "#" },
    ],
  },
];

export const Footer: FC = () => {
  return (
    <footer className="border-t border-transparent-white text-md py-[5.6rem] mt-12">
      <Container className="flex flex-col lg:flex-row justify-between">
        <div>
          <div className="flex flex-row h-full justify-between lg:flex-col">
            <div className="text-grey flex items-center">
              <Logo className="w-4 h-4 mr-2 text-white" /> Linear - Designed
              Worldwide
            </div>
            <div className="mt-auto flex space-x-4 ">
              <Link
                href="#"
                className="text-grey hover:text-off-white transition-colors"
              >
                <TwitterIcon />
              </Link>
              <Link
                href="#"
                className="text-grey hover:text-off-white transition-colors"
              >
                <GithubIcon />
              </Link>
              <Link
                href="#"
                className="text-grey hover:text-off-white transition-colors"
              >
                <SlackIcon />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {footerLinks.map((column) => (
            <div
              key={column.title}
              className="lg:min-w-[18rem] mt-10 min-w-[50%]  lg:mt-0"
            >
              <h3 className="text-medium mb-3 ">{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link.title} className="[&_a]:last:mb-0">
                    <Link
                      href={link.href}
                      className="mb-3 block text-grey hover:text-off-white transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
};
