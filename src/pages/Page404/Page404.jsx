import { useEffect, useState } from "react";
import "./Page404.scss";

function Page404() {

  const [component, setComponent] = useState(false)

  useEffect(() => {
    const load = setTimeout(() => {
      setComponent(true)
    }, 500)
    console.log(load)
  }, [])


  return (component && <div className="page404">
    <div className="text404">404</div>
    <div className="oups">Oups! La page que vous demandez n'existe pas.</div>
    <a className="link" href="/">Retourner sur la page d’accueil</a>
   </div>);
}

export default Page404;
