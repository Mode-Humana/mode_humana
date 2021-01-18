import api from "./conf";

const server = {
	addEmail(email) {
		console.log('server submit')
		const payload = {
			"email": email
		}
		return api.post("/emails/add_email", payload)
	}
}
export default server;