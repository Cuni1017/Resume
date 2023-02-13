import React from "react";
import Button from "../components/Button";
import { GoDeviceMobile, GoComment, GoFlame } from "react-icons/go";

export default function ButtonPage() {
  const handleClick = () => {
    // console.log("click");
  };

  return (
    <>
      <div>
        <Button className="mb-5" rounded onClick={handleClick}>
          <GoDeviceMobile />
          Click me!!
        </Button>
      </div>
      <div>
        <Button className="mb-5" primary outlined onMouseEnter={handleClick}>
          <GoComment />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button className="mb-5" secondary onMouseLeave={handleClick}>
          See Deal!
        </Button>
      </div>
      <div>
        <Button className="mb-5" success rounded>
          <GoFlame />
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button className="mb-5" warning outlined>
          Something!
        </Button>
      </div>
      <div>
        <Button className="mb-5" danger>
          Danger!
        </Button>
      </div>
    </>
  );
}
