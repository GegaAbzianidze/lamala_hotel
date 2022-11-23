import { Icon } from "@iconify/react";
import React from "react";
import Room_1 from "../Images/Room_1.png"

function RoomExmp() {
  return (
    <div className="flex items-center justify-center mt-12">
      <div className="ml-10">
        <img src={Room_1} alt="Room" className="h-[450px] mb-3" />
        <h1 className="font-[ubuntu] text-xl mb-3">Room N1</h1>
        <p className="mb-3">
          Best for Couplesm. seek happiness in intimacy
          <br />
          without worry of being disturbed. Feel the
          <br />
          whole world just for you two.
        </p>
        <a href="/" className="flex">Book Room Now <Icon icon="ion:ios-arrow-thin-right" className="mt-[5px]"/></a>
      </div>
      <div className="ml-10">
        <img src={Room_1} alt="Room" className="h-[450px] mb-3" />
        <h1 className="font-[ubuntu] text-xl mb-3">Room N2</h1>
        <p className="mb-3">
          Best for Couplesm. seek happiness in intimacy
          <br />
          without worry of being disturbed. Feel the
          <br />
          whole world just for you two.
        </p>
        <a href="/" className="flex">Book Room Now <Icon icon="ion:ios-arrow-thin-right" className="mt-[5px]"/></a>
      </div>
      <div className="ml-10">
        <img src={Room_1} alt="Room" className="h-[450px] mb-3" />
        <h1 className="font-[ubuntu] text-xl mb-3">Room N3</h1>
        <p className="mb-3">
          Best for Couplesm. seek happiness in intimacy
          <br />
          without worry of being disturbed. Feel the
          <br />
          whole world just for you two.
        </p>
        <a href="/" className="flex">Book Room Now <Icon icon="ion:ios-arrow-thin-right" className="mt-[5px]"/></a>
      </div>
    </div>
  );
}

export default RoomExmp;
