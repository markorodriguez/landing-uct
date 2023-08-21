import pool from "@/db/connection";

const getMastersDegrees = async () => {
    let connection = null;

    try {
        connection = await pool.connect()
        const data = await connection.query("select id, name from masters_degrees order by id asc")
        console.log(data.rowCount, "rows founds")
        return data.rows
    } catch (error) {
        console.log(error)
    } finally {
        if (connection) connection.release()
    }
}

export default getMastersDegrees;