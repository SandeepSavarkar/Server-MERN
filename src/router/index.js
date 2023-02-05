import { Router } from "express";
import { check } from "../controller/check.js";
import { getUsers, loadUsers, postUser } from "../controller/user.js";

const router = Router();

router.get("/check", check);
router.get("/load-users", loadUsers);
router.get("/users", getUsers);
router.post("/user", postUser);

export default router;
