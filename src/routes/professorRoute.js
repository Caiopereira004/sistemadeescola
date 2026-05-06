import { Router } from 'express';
import { listarProfessores, registarProfessor, atualizarProfessor, deletarProfessor } from '../controllers/professorController';
import { verificarToken } from '../middlewares/authmiddlewares';

const router = Router();

router.get("/", verificarToken, listarProfessores);
router.post("/", verificarToken, registarProfessor);
router.put("/:id", verificarToken, atualizarProfessor);
router.delete("/:id", verificarToken, deletarProfessor);

export default router;