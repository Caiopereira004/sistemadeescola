import conexao from "../config/db.js";

export async function listarDisciplinasDB(){
    const conn = await conexao.getConnection();

    try{
        const [disciplinas] = await conn.query(`SELECT id, nome, carga_horaria FROM disciplinas`);
    
    } finally{
        conn.release();
    }
}

export async function registrarDisciplinaDB(){
    const conn = await conexao.getConnection();

    try{
        const [resultado] = await conn.query("INSERT INTO disciplinas(id, nome, carga_horaria) VALUES (?, ?, ?, ?)", [Id, nome, carga_horaria]);
        
        return resultado;

    }finally{
        conn.release();
    }
}

export async function atualizarDisciplinaDB(id, nome, carga_horaria){
    const conn = await conexao.getConnection();

    try{
        await conn.query("UPDATE disciplinas SET nome = ?, carga_horaria: = ? WHERE id = ?", [id, nome, carga_horaria]);

    }finally{
        conn.release();
    }
}

export async function deletarDisciplinaDB(id){
    const conn = await conexao.getConnection();

    try{
        const[resultado] = await conn.query("DELETE FROM disciplinas WHERE id = ?", [id]);

        return resultado;

    }finally{
        conn.release();
    }
}