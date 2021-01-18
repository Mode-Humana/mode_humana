import api from "./conf";

const server = {
	addEmail(email) {
		const payload = {
			"email": email
		}
		return api.post("/emails/add_email", payload)
	}
}
export default server;