import ImageSlider from "@/components/ImageSlider";
import { serverSideFunction } from "../utils/server-utils";
// import { clientSideFunction } from "../utils/client-utils";


export default function ServerRoutePage() {
  const result = serverSideFunction();
  //  const clientResult = clientSideFunction();
  return (
    <>
      <h1>Server Route {result}</h1>
      {/* <h1>client Result {clientResult}</h1> */}
      <ImageSlider />
    </>
  );
}