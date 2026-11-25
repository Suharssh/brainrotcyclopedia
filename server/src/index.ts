import express from "express";
const app = express(); // creates an express instance, 
// which is a function that can be used to define routes and middleware

app.use(express.json()); // middleware to parse json request bodies, 
// middleware is a function that has access to the request and response objects, and 
// can modify them or end the request response cycle

app.get("/api/health", (req, res) => {
    res.json({status: "server is healthy and safe", time: new Date().toISOString(), uptime: process.uptime() }); // sends a json response with the status and current time
}); // defines a get route for the /api/health endpoint, which responds with a JSON 
// object indicating that the server is healthy and safe

app.delete("/api/hello", (req, res) => {
  res.json({ message: "hi" });
});



const port = Number(process.env.PORT) || 3000; // sets the port to the value of the port environment variable, or 3000 if not set

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});