"use client";
import { useState } from "react";

export default function NavLink() {
  const [search, setSearch] = useState("");
  console.log("NavLink component rendered");
  return <h1>Nav Link page</h1>;
}
