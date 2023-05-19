import { useEffect, useState } from "react";
import styled from "styled-components";

const Page404Styled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ff0002;
  max-width: 100%;
  padding: 20px;

  .text404 {
    font-style: normal;
    font-weight: 700;
    font-size: 140px;
    line-height: 142.6%;
  }
  .oups {
    font-weight: 500;
    font-size: 36px;
    margin-bottom: 150px;
    text-align: center;
  }
  .link {
    color: #ff0002;
    margin-bottom: 70px;
  }
  @media all and (max-width: 650px) {
    .text404 {
      font-size: 120px;
    }
    .oups {
      font-size: 14px;
      margin-bottom: 60px;
    }
  }
`;

function Page404() {
  const [component, setComponent] = useState(false);

  useEffect(() => {
    const load = setTimeout(() => {
      setComponent(true);
    }, 500);
    console.log(load);
  }, []);

  return (
    component && (
      <Page404Styled className="page404">
        <div className="text404">404</div>
        <div className="oups">
          Oups! La page que vous demandez n'existe pas.
        </div>
        <a className="link" href="/">
          Retourner sur la page d’accueil
        </a>
      </Page404Styled>
    )
  );
}

export default Page404;
