import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/mongodb';
// npm install bcryptjs
//import bcrypt from 'bcryptjs';
import { Eventos } from '../../models/eventos';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { nome, data, horario, descricao, exibirPagina }: Eventos = req.body;

        if (!nome || !data || !horario || !descricao || !exibirPagina) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        try {
            const { db } = await connectToDatabase();
            const result = await db.collection('t_eventos').insertOne({ nome, data, horario, descricao, exibirPagina });
            return res.status(201).json({ message: 'Evento salvo com sucesso', id: result.insertedId });
        } catch (error) {
            console.error('Erro ao salvar evento:', error);
            return res.status(500).json({ error: 'Erro ao salvar evento' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Método ${req.method} não permitido`);
    }
}
