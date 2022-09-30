import db from '../db/index.js'

export async function getAlluser(req, res) {
    try {
        const [rows] = await db.query('select id,username,nickname from ev_users')
        console.log(rows);
        res.send({
            status: 0,
            message: 'SUCCESS',
            data: rows,
        })
    } catch (error) {
        res.send({
            status: 1,
            message:'faild',
            desc:error.message
        })
    }
}



// getAlluser()