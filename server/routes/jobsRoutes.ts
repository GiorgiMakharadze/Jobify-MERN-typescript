import { Router } from "express";
import {
  createJob,
  getAllJobs,
  updateJob,
  deleteJob,
  showStats,
} from "../controllers/jobsController";

const router = Router();

router.route("/").post(createJob).get(getAllJobs);
router.route("/stats").get(showStats);
router.route("/:id").delete(deleteJob).patch(updateJob);

export default router;
