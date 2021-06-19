import "tailwindcss/tailwind.css";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      {/* <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
        @import url("https://use.typekit.net/hop6auu.css");

        @tailwind base;
        @tailwind components;
        @tailwind utilities;

        #__next,
        html,
        body {
          height: 100%;
          font-family: "montserrat", sans-serif;
        }

        @layer base {
          h1 {
            @apply text-3xl;
          }
          h2 {
            @apply text-2xl;
          }
          h3 {
            @apply text-xl;
          }
          h4 {
            @apply text-lg;
          }
          h5 {
            @apply text-base;
          }
          h6 {
            @apply text-sm;
          }
        }
      `}</style> */}
    </>
  );
}
