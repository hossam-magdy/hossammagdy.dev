import React from "https://esm.sh/react";

export default function GoogleAnalyticsScript() {
  return <>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-6009068-7"
    >
    </script>
    <script>
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'UA-6009068-7');
        `}
    </script>
  </>;
}
