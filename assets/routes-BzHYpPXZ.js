import { n as e, r as t, t as n } from "./index-DX0tUcud.js";
var r = t(e()),
  i = n();
function a() {
  return (
    (0, r.useEffect)(() => {
      let e = window;
      (e.BDY_ATM_BG = `/assets/atm-booth.jpg`),
        (e.BDY_ASSETS = {
          happyBirthday: `/assets/happy-birthday.png`,
          cheekLove: `/assets/hug.mp4`,
          hugBears: `/assets/hug-bears.mp4`,
          iLoveYou: `/assets/i-love-you.mp4`,
          bearCake: `/assets/bear-cake.jpeg`,
          giftBox: `/assets/gift-box.mp4`,
          thankYou: `/assets/thank-you.png`,
          song: `/assets/our-song.mp3`,
          songTitle: `Mujhe Tumse Bahut Hai Pyar`,
        });
      let t = (e) =>
          new Promise((t) => {
            if (document.querySelector(`script[data-bdy="${e}"]`)) return t();
            let n = document.createElement(`script`);
            (n.src = e),
              (n.async = !1),
              (n.dataset.bdy = e),
              (n.onload = () => t()),
              (n.onerror = () => t()),
              document.body.appendChild(n);
          }),
        n = !1;
      return (
        (async () => {
          await t(`https://unpkg.com/lucide@latest/dist/umd/lucide.js`),
            !n &&
              (await t(`/chapters.js`),
              !n && (await t(`/script.js`), !n && (await t(`/enhance.js`))));
        })(),
        () => {
          n = !0;
        }
      );
    }, []),
    (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)(`div`, { id: `app` }),
        (0, i.jsx)(`div`, { className: `bdy-vignette`, "aria-hidden": `true` }),
        (0, i.jsx)(`div`, {
          className: `bdy-watermark`,
          "aria-hidden": `true`,
          children: `© 2026 Rashed. All Rights Reserved.`,
        }),
      ],
    })
  );
}
export { a as component };
