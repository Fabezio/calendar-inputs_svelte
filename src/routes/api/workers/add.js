import main from '$lib/data/mongoose';
import { Worker } from '$lib/data/models/workers';
main();
export async function post(request) {
	const newObj = new Worker(request.body);
	try {
		const obj = await newObj.save();
		if (!obj) {
			throw new Error('error adding worker');
		}
		//   return {
		//       status: 200,
		//       headers: {Location: '/workers'}
		//   }
		return {
			status: 200,
			body: obj
		};
	} catch (error) {
		return {
			status: 500,
			body: 'error adding worker'
		};
	}
}
