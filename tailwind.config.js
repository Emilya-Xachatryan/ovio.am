/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "product1770x": "1770px",
        "product1520x": "1520px",
        "product1465x": "1465px",
        "product1420x": "1420px",
        "product1370x": "1370px",
        "product1360x": "1360px",
        "product1310x": "1310px",
        "product1260x": "1260px",
        "product1255x": "1255px",
        "product1220x": "1220px",
        "product1200x": "1200px",
        "product1070x": "1070px",
        "product1280x": "1280px",
        "product1190x": "1190px",
        "product1100x": "1100px",
        "product1064x": "1064px",
        "product1047x": "1047px",
        "product1000x": "1000px",
        "product970x": "970px",
        "product885x": "885px",
        "product880x": "880px",
        "product805x": "805px",
        "product700x": "700px",
        "product660x": "660px",
        "product640x": "640px",
        "product590x": "590px",
        "product560x": "560px",
        "product460x": "460px",
        "product430x": "430px",
        "product420x": "420px",
        "product380x": "380px",
        "product360x": "360px",
        "product340x": "340px",
        "product335x": "335px"
      },
      boxShadow: {
        "topSide": "0 9px 45px 0 rgba(0,0,0,.2)",
        "bottomContact": "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        "headerBottom": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        "register": "0 0 0 .2rem rgba(83, 7, 157, .25)",
        "phoneService" : "0 8px 30px 0 rgba(0, 0, 0, .15)",
        "vacancies": "0 8px 30px 0 rgba(0, 0, 0, .15)"
      },
      gridAutoColumns: {
        "3xauto": "repeat(3, auto)",
      },
      borderRadius: {
        'custom': '50% 0 0 50%',
      },
    },
  },
  plugins: [],
}