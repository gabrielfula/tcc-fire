import { useState } from "react";
import { Aside, Hamburguer, MenuStyled } from "./sideStyled";

import { FaFireExtinguisher, FaTemperatureLow } from "react-icons/fa";

export default function Sidebar() {
  const [show, setShow] = useState(false);

  const HandleMenu = () => {
    setShow(!show);
  };
  return (
    <Aside show={show}>
      <Hamburguer onClick={HandleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </Hamburguer>
      <MenuStyled show={show}>
        <li>
          <FaTemperatureLow size={20} className="icons" />
          <a href="/temperatura">Temperatura</a>
        </li>
      </MenuStyled>
    </Aside>
  );
}
