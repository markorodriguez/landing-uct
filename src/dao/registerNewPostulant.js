import pool from "@/db/connection";

const registerNewPostulant = async (dni, email, lastname, masterDegree, name, phone, surname) => {
    let connection = null;

    try {
        connection = await pool.connect();
        const data = await connection.query(
            "insert into postulants(name, lastname, surname, email, phone, master_id, dni) values ($1, $2, $3, $4, $5, $6, $7) returning id;",
            [name, lastname, surname, email, parseInt(phone), parseInt(masterDegree), parseInt(dni)]
        );

        return data.rows
    } catch (error) {
        console.log(error)
    } finally {
        if (connection) connection.release()
    }
}

export default registerNewPostulant;