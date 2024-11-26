"use client";
import React from "react";
import logo from "@/assets/images/logo_white.png";
import Link from "next/link";
import Image from "next/image";
import Container from "../ui/Container";
import FacebookLogo from "@/assets/images/social/Facebook.png";
import LinkedinLogo from "@/assets/images/social/Linkedin.png";
import TwitterLogo from "@/assets/images/social/Twitter.png";
import { Input } from "antd";

const Footer = () => {
  const footerLink = [
    { link: "about", text: "About us" },
    { link: "contact-us", text: "Contact Us" },
    { link: "privacy", text: "Privacy Policy" },
    { link: "terms", text: "Terms & Condition" },
  ];
  const socialLink = [
    { link: "https://facebook.com", icon: FacebookLogo },
    { link: "https://x.com", icon: TwitterLogo },
    { link: "https://linkedin.com", icon: LinkedinLogo },
  ];

  return (
    <div className="bg-black text-white">
      {/* Footer top */}
      <Container className="py-14 space-y-10 md:space-y-16">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-4">
            <Link
              href={"/"}
              className="font-bold text-xl flex gap-3 items-center"
            >
              <Image height={150} width={150} src={logo} alt="Bakbakum"></Image>{" "}
            </Link>
            <p className="max-w-[411px] text-white font-thin">
              Saepe quo suscipit vitae quia. Repudiandae nobis quis. Laboriosam
              unde quae qui quasi mollitia tenetur. Dicta explicabo est
              consectetur maxime quos fugit velit assumenda est.
            </p>
          </div>

          {/* Subscribe */}
          <div className="space-y-4">
            <h2 className="font-semibold text-[20px] md:text-[23px]">
              Sign Up For Our Newsletter!
            </h2>

            <p className="text-white font-thin">
              Get notified about updates and be the first to get early access to
              new Podcast episodes.
            </p>
            <Input.Search
              placeholder="Your email address"
              allowClear
              enterButton="Subscribe"
              size="large"
              // onSearch={() => console.log("hey")}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Useful link */}
          <div className="space-y-4">
            <h2 className="font-semibold">Contact Us</h2>

            <p className="font-thin">support@we5ive.com</p>
          </div>
          <div className="space-y-2">
            {footerLink.slice(0, 2).map((fl, ind) => {
              return (
                <Link
                  key={ind}
                  href={`/${fl.link}`}
                  className=" text-md flex gap-3 items-center hover:text-primary transition group font-thin"
                >
                  {fl.text}
                </Link>
              );
            })}
          </div>
          <div className="space-y-2">
            {footerLink.slice(2).map((fl, ind) => {
              return (
                <Link
                  key={ind}
                  href={`/${fl.link}`}
                  className=" text-md flex gap-3 items-center hover:text-primary transition group font-thin"
                >
                  {fl.text}
                </Link>
              );
            })}
          </div>
          <div className="space-y-4">
            <h2 className="font-semibold">Social Link</h2>
            <div className="flex items-center gap-2 flex-wrap">
              {socialLink.map((sl, ind) => {
                return (
                  <Link
                    key={ind}
                    href={`/${sl.link}`}
                    className=" text-md flex gap-3 items-center hover:text-primary transition group"
                  >
                    <Image src={sl.icon} alt={sl.link} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      {/* Footer bottom */}
      <div className="bg-primary py-2 text-center">
        <Container className=" ">
          <p className="text-white text-center">
            © {new Date().getFullYear()} <span className="">| We5ive</span>
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
