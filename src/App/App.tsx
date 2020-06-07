import { React, ReactDOMServer } from "../../deps.ts";

export const RenderedApp = ReactDOMServer.renderToString(
  <div className="yes-react-and-jsx-in-deno">
    This line is from React SSR in JSX
  </div>,
);
