"use client"; // This is a client component 👈🏽
import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";

function Tab(): JSX.Element {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "unista",
      children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label: "uplands hunt",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "woodcore",
      children: "Content of Tab Pane 3",
    },
    {
      key: "4",
      label: "quba",
      children: "Content of Tab Pane 4",
    },
  ];

  return (
    <>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  )
}

export default Tab;
