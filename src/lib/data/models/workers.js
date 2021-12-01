import mongoose from 'mongoose';

const { model, Schema } = mongoose;

export const workerSch = new Schema({
	nom: { type: String, required: true },
	prenom: String,
	completeName: String,
	slugName: String,
	phone: String,
	email: String
});

export const Worker = model('Worker', workerSch);
