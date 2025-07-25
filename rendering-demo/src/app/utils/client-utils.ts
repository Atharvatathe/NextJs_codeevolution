import "client-only";

export const clientSideFunction = () => {
  console.log(
    `use window object,
       use browser APIs,
       handle user interactions,`
  );
  return "client result";
};