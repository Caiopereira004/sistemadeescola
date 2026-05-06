import conexao from '../config/db.js';

export async function listarTurmas(){
    const conn = await conexao.getConnection();

    try{
        const [turmas] = await conn.query(`SELECT 
                turmas.id, 
                turmas.nome, 
                turmas.ano_letivo
            FROM turmas
            JOIN professores
                ON turmas.professor_id = professor.id`);

        return turmas;

    }finally{
        conn.release();
    }
}