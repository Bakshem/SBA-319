import express from "express";
import { getAllActors, createActor } from "../controllers/actorController.js";

const router = express.Router();

router.get('/', getAllActors);
router.post('/', createActor);

export default router;