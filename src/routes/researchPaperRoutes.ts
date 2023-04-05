import express, { Router } from "express"
import researchPaperController from "../controllers/researchPaperController"
import fetchUser from "../middlewares/fetchUser"
const router: Router = express.Router()

router.use(fetchUser)
router.get('/:id', researchPaperController.getResearchPaperById)
router.get('/all', researchPaperController.getAllResearchPapers)
router.post('/create', researchPaperController.createResearchPaper)
router.put('/edit/:id', researchPaperController.editResearchPaper)
router.delete('/delete/:id', researchPaperController.deleteResearchPaper)

export default router