"use client";
import { Layout, Menu, Button, Drawer, Input } from "antd";
import MenuOutlined from "@ant-design/icons/MenuOutlined";
import Image from "next/image";
import logo from "@/assets/images/logo_dark.png";
import NavbarProfileDropdown from "./NavbarProfileDropdown";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { SearchOutlined } from "@ant-design/icons";
import { SearchIcon, ShoppingBagIcon } from "../ui/icons";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/redux/hook";
import CartSider from "../ui/CartSider";

const { Header } = Layout;

export const Navbar = () => {
  const [isCartSiderDrawerVisible, setIsCartSiderDrawerVisible] =
    useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const pathname = usePathname();

  const { products } = useAppSelector((state) => state.cart);

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
      style={{ position: "sticky", top: 0, zIndex: 1000, width: "100%" }}
      className="!text-black !bg-pinky flex items-center justify-between"
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
          className="!hidden md:!flex gap-4 justify-start ml-2 rounded-md !bg-pinky"
          theme="light"
        />
        {/* Right Side Content for Large Screens */}
        <div className="navbar-right-content hidden md:flex items-center gap-4">
          <Input
            placeholder="Search"
            prefix={<SearchOutlined />}
            size="large"
            className="!rounded-full bg-[#F5F5FF] text-black !border-none !shadow-none"
          />
          <div className="relative cursor-pointer">
            <ShoppingBagIcon
              className="!text-[25px]"
              onClick={() => setIsCartSiderDrawerVisible(true)}
            />
            <span className="bg-black h-5 w-5 rounded-full absolute -top-[6px] -right-[9px] flex items-center justify-center text-white text-sm">
              {products?.length}
            </span>
          </div>
          <NavbarProfileDropdown />
        </div>

        <div className="md:!hidden flex items-center gap-4">
          <SearchIcon />
          <div className="relative cursor-pointer">
            <ShoppingBagIcon
              className="!text-[25px]"
              onClick={() => setIsCartSiderDrawerVisible(true)}
            />
            <span className="bg-black h-5 w-5 rounded-full absolute -top-[6px] -right-[9px] flex items-center justify-center text-white text-sm">
              {products?.length}
            </span>
          </div>
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

        {/* Cart drawer */}
        <Drawer
          title="Cart"
          placement="right"
          onClose={() => setIsCartSiderDrawerVisible(false)}
          open={isCartSiderDrawerVisible}
          width="400"
        >
          <CartSider />
        </Drawer>
      </div>
    </Header>
  );
};
