import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const router = Router();
router.get("/hello", (req, res) => res.send("Hello World! 01"));

api.use("/api/", router);

api.use('/.netlify/functions/', router);

export const handler = serverless(api);