import "./config/env.js";

const { default: app } = await import("./app.js");


const PORT = 4000;


app.listen(PORT, () => {
  console.log(
    `Cafe Matcha API running on port ${PORT}`
  );
});