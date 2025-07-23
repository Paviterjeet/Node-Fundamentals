import e from "express";

const app = e();

app.get(
  "/",
  (req, res, next) => {
    res.write(" 1 ");
    next();
  },
  (req, res, next) => {
    try {
        
      throw new Error(" Gilli gilli");
      
    } catch (error) {
      console.log("This is a catch Box");
      next(error);
    }
  },
  (req, res, next) => {
    res.end(" 4 ");

  },
  (err, req, res,next) => {
    console.log({ "error": err.message });
  }
);

app.listen("3000", () => {
  console.log(`http://localhost:3000`);
});
