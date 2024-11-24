"use client";
import { VerifiedOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Menu } from "antd";
import React from "react";

const NavbarProfileDropdown = () => {
  const menu = (
    <Menu>
      <Menu.Item key="dashboard">
        <a href={`/`}>Dashboard</a>
      </Menu.Item>
      <Menu.Item key="profile">
        <a href={`/`}>Profile</a>
      </Menu.Item>
      <Menu.Item key="change-password">
        <a href={`/`}>Change Password</a>
      </Menu.Item>
      <Menu.Item key="signOut" danger>
        Sign out
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      (
      <Dropdown
        overlay={menu}
        placement="bottomRight"
        trigger={["click"]}
        className="inline-block"
      >
        <div className="relative">
          <Avatar
            size="large"
            src={"https://i.pravatar.cc/150?u=a04258a2462d826712d"}
            className="cursor-pointer"
          />

          <span className="h-5 w-5 rounded-full flex items-center justify-center text-primary text-xl absolute -top-2 md:top-0 right-0">
            <VerifiedOutlined />
          </span>
        </div>
      </Dropdown>
      )
    </>
  );
};

export default NavbarProfileDropdown;
