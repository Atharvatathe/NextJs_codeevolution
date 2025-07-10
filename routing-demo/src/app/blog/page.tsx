import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "blog",
  },
};

export default async function Blog() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Internal loading");
    }, 2000);
  });
  return <h1>My blog</h1>;
}
