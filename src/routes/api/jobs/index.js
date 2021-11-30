import main from '$lib/data/mongoose';
import { Job } from '$lib/data/models/jobs';
// import {Worker} from '$lib/models/'
main();

export async function get() {
	try {
		const jobs = await Job.find();
		// if (!jobs) { throw new Error('No job found') }
		return {
			status: 200,
			body: jobs
		};
	} catch (error) {
		return {
			status: 400,
			body: []
		};
	}
}

// export async function post(request, response) {
//     await
// }
// export async function put(request, response) {
//     await
// }
