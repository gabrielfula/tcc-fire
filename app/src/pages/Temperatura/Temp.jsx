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
          {info.map((item, key) => {
            return (
              <section key={key}>
                <div>
                  <p>
                    {item.temp}
                    <code>&deg;C</code>
                  </p>
                </div>
                {item.fire == 1 && (
                  <div>
                    <FireDetected>
                      <span>Fogo Detectado !</span>
                      {/* {window.alert("Fogo Detectado")} */}
                      <Icon>
                        <div>
                          <ImFire size={30} />
                        </div>
                      </Icon>
                    </FireDetected>
                  </div>
                )}
              </section>
            );
          })}
          <img src="./imagens/MiniRoom.png" alt="3D Room" />
        </ContentRoom>
      </Container>
    </>
  );
}
