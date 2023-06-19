import { useEffect, useState } from "react";
import { Container, ContentRoom, FireDetected, Icon } from "./TempStyled";
import axios from "axios";
import { ImFire } from "react-icons/im";

export default function Temperatura() {
  const [info, setInfo] = useState([]);

  const url = "http://localhost:3000";

  useEffect(() => {
    axios
      .get(`${url}`)
      .then((response) => {
        setInfo(response.data);
        console.log("Working");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [info]);

  return (
    <>
      <Container>
        <ContentRoom>
          {info.length == 1 &&
            info.map((item, key) => {
              return (
                <section key={key}>
                  {/* {alert("A localização detectou fogo")} */}
                  <div>
                    <p>
                      {item.temp}
                      <code>&deg;C</code>
                    </p>
                  </div>
                  <div>
                    <FireDetected>
                      <span>Fogo Detectado !</span>
                      <Icon>
                        <div>
                          <ImFire size={30} />
                        </div>
                      </Icon>
                    </FireDetected>
                  </div>
                </section>
              );
            })}
          <img src="./imagens/MiniRoom.png" alt="3D Room" />
        </ContentRoom>
      </Container>
    </>
  );
}
