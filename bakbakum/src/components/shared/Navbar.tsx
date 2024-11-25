"use client";
import { Layout, Menu, Button, Drawer, Input } from "antd";
import MenuOutlined from "@ant-design/icons/MenuOutlined";
import Image from "next/image";
import logo from "@/assets/images/logo_dark.png";
import NavbarProfileDropdown from "./NavbarProfileDropdown";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { SearchIcon } from "../ui/icons";
import { usePathname } from "next/navigation";

const { Header } = Layout;

export const Navbar = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const pathname = usePathname();

  // Map navigation items from siteConfig
  const menuItems = siteConfig.navItems.map((item) => ({
    key: item.href,
    label: <Link href={item.href}>{item.label}</Link>,
    className: `font-semibold ${pathname === item.href ? "!text-primary" : ""}`,
  }));

  // Mobile menu items for Drawer
  const drawerMenuItems = (
    <Menu
      items={siteConfig.navMenuItems.map((item, index) => ({
        key: `${item}-${index}`,
        label: <Link href={item.href}>{item.label}</Link>,
        className: `font-semibold ${
          pathname === item.href ? "!text-primary" : ""
        }`,
      }))}
    />
  );

  // Handle Drawer visibility
  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };

  return (
    <Header
      style={{ position: "sticky", top: 0, zIndex: 10000000, width: "100%" }}
      className="!text-black !bg-white border-b flex items-center justify-between"
    >
      {/* Mobile Menu Button */}
      <Button
        icon={<MenuOutlined />}
        className="md:!hidden mr-2"
        onClick={showDrawer}
      />
      <div className="flex justify-between items-center  w-full">
        {/* Logo */}
        <div className="logo flex items-center gap-1">
          <Link href="/" className="flex justify-start items-center gap-2">
            <Image src={logo} height={100} width={100} alt="logo" />
          </Link>
        </div>
        {/* Large Screen Menu */}
        <Menu
          mode="horizontal"
          items={menuItems}
          className="!hidden md:!flex gap-4 justify-start ml-2 rounded-md"
          theme="light"
        />
        {/* Right Side Content for Large Screens */}
        <div className="navbar-right-content hidden md:flex items-center gap-4">
          <Input.Search />
          <ShoppingCartOutlined />
          <NavbarProfileDropdown />
        </div>

        <div className="md:!hidden flex items-center gap-4">
          <SearchIcon />
          <ShoppingCartOutlined />
          <NavbarProfileDropdown />
        </div>

        {/* Drawer for Mobile Menu */}
        <Drawer
          title={
            <Link href="/" className="flex items-center gap-2">
              <Image src={logo} height={80} width={80} alt="logo" />
            </Link>
          }
          placement="right"
          onClose={closeDrawer}
          open={isDrawerVisible}
        >
          {drawerMenuItems}
        </Drawer>
      </div>
    </Header>
  );
};
