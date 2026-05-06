import { listarNotasDB, registrarNotaDB, atualizarNotaDB, deletarNotaDB } from "../models/notaModel.js";

export const listarNotas = async (req, res) =>{
    try{
        const notas = await listarNotas.listarNotasDB();

        return res.json(notas);

    }catch(error){
        return res.status(500).json({msg: "Erro ao listar notas!", erro: error.message});
    }
} 

export const registrarNota = async (req, res) =>{
    const {aluno_id, disciplina_id, nota, bimestre, observacao} = req.body;

    try{
        if(!aluno_id || !disciplina_id || !nota || !bimestre || !observacao){
            return res.status(400).json({msg: "Id do aluno, Id da disciplina, nota, bimestre e observação são obrigatórios!"});
        }

        const dado = await registrarNota.registrarNotaDB();

        return dado;

    }catch(error){
        return res.status(500).json({msg: "Erro ao registrar nota!", erro: error.message});
    }
}