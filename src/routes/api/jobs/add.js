import main from '$lib/data/mongoose';
import { Job } from '$lib/data/models/jobs';
main();
export async function post(request) {
	const newObj = new Job(request.body);

	try {
		const obj = await newObj.save();
		if (!obj) {
			throw new Error('error adding job');
		}
		return {
			status: 200,
			body: obj
		};
	} catch (error) {
		return {
			status: 500,
			body: 'error adding job'
		};
	}
}
