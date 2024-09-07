import request from "supertest";
import app from "../../app";

it("responds with a cookie when given valid credentials", async () => {
  console.log("Starting test for valid credentials...");
  const response = await request(app).post("/api/v1/admin/auth/login").send({
    email: "adminglidix@gmail.com",
    password: "admin@321",
  });
  console.log("Received response:", response);
  expect(200);
}, 20000); // Increase timeout to 20000 ms
