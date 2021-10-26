import React, { useEffect } from "react";
import { navigate } from "gatsby";

// markup
const IndexPage = () => {
  useEffect(() => {
    navigate("/en");
  }, []);

  return (
    <main>
      <div>here</div>
    </main>
  );
};

export default IndexPage;
