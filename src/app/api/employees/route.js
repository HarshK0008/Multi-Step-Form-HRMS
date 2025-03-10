import pool from "../../../lib/db.js";

export async function GET(req) {
	try {
		const [rows] = await pool.query("SELECT * FROM personal_information");
		return new Response(JSON.stringify(rows), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (err) {
		return new Response(JSON.stringify({ error: err.message }), {
			status: 500,
		});
	}
}
