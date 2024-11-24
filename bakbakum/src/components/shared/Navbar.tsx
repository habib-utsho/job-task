"use client";
import { Layout, Menu, Button, Drawer } from "antd";
import MenuOutlined from "@ant-design/icons/MenuOutlined";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import NavbarProfileDropdown from "./NavbarProfileDropdown";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";

const { Header } = Layout;

export const Navbar = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  // Map navigation items from siteConfig
  const menuItems = siteConfig.navItems.map((item) => ({
    key: item.href,
    label: <Link href={item.href}>{item.label}</Link>,
  }));

  // Mobile menu items for Drawer
  const drawerMenuItems = (
    <Menu
      items={siteConfig.navMenuItems.map((item, index) => ({
        key: `${item}-${index}`,
        label: <Link href={item.href}>{item.label}</Link>,
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
      style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}
      className="!text-black !bg-white border-b"
    >
      <div className="flex justify-between items-center">
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
          className="!hidden md:!flex gap-4 justify-start ml-2 !bg-primary/10 rounded-md"
          theme="light"
        />
        {/* Right Side Content for Large Screens */}
        <div className="navbar-right-content hidden md:flex items-center gap-4">
          <NavbarProfileDropdown />
        </div>
        {/* Mobile Menu Button */}
        <Button
          icon={<MenuOutlined />}
          className="md:!hidden"
          onClick={showDrawer}
        />
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
          <div className="mt-4">
            <NavbarProfileDropdown />
          </div>
        </Drawer>
      </div>
    </Header>
  );
};
