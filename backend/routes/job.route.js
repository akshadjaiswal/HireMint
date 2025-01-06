import express from "express";
import isAuthenticated from "../middlewares/isAuthenticates.js";
import { getAdminJobs, getAllJobs, getJobById, jobPost } from "../controllers/job.controller.js";
const router = express.Router()

router.route("/post").post(isAuthenticated, jobPost)
router.route("/get").get( getAllJobs)
router.route("/getadminjobs").get(isAuthenticated, getAdminJobs)
router.route("/get/:id").get(isAuthenticated, getJobById)

export default router; 