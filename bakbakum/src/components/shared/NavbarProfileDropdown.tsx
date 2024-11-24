"use client";
import { UserOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
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
      <Dropdown
        overlay={menu}
        placement="bottomRight"
        trigger={["click"]}
        className="inline-block"
      >
        <UserOutlined />
      </Dropdown>
    </>
  );
};

export default NavbarProfileDropdown;
