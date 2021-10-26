import React from "react";
import { navigate } from "gatsby";

import { languageProvider } from "../../../store";

const Layout = ({ children, ...props }) => {
  const setLang = languageProvider((state) => state.setLang);
  const lang = languageProvider((state) => state.lang);

  React.useEffect(() => {
    let endPoint = props.uri.substring(3);
    navigate(`/${lang}${endPoint}`);
  }, [lang]);

  return (
    <div className="global-wrapper">
      header
      <span style={{ cursor: "pointer" }} onClick={() => setLang("en")}>
        English
      </span>
      {` `}/{` `}
      <span style={{ cursor: "pointer" }} onClick={() => setLang("ge")}>
        ქართული
      </span>
      <main>{children}</main>
    </div>
  );
};

export { Layout };
