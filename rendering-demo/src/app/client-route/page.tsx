"use client";

import { serverSideFunction } from "../utils/server-utils";
import React from "react";

export default function ClientRoutePage() {
  const result = serverSideFunction();
  return (
    <div>
      <h1>Client route page</h1>
    </div>
  );
}
