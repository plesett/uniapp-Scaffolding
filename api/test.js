import fly, {wxLogin} from "@/utils/request.js"

export async function test() {
	return fly.get("/app/api/index", {
		parms: 1
	})
}

