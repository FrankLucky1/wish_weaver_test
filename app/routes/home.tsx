import React from 'react';
import { Welcome } from "../welcome/welcome";

export function meta() {
  return [
    { title: "React mansory for Wish Weaver" },
    { name: "Wish Weaver", content: "welcom to my test project for Wish Weaver!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
