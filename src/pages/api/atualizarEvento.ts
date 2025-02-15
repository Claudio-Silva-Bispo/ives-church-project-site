import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PUT') {
        const { id, nome, data, horario, descricao, exibirPagina } = req.body;

        if (!id || !nome || !data || !horario || !descricao || !exibirPagina) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        try {
            const { db } = await connectToDatabase();
            const result = await db.collection('t_eventos').updateOne(
                { _id: new ObjectId(id) },
                { $set: { nome, data, horario, descricao, exibirPagina } }
            );
            if (result.matchedCount === 0) {
                return res.status(404).json({ error: 'Evento não encontrado' });
            }
            return res.status(200).json({ message: 'Evento atualizado com sucesso' });
        } catch (error) {
            console.error('Erro ao atualizar evento:', error);
            return res.status(500).json({ error: 'Erro ao atualizar evento' });
        }
    } else {
        res.setHeader('Allow', ['PUT']);
        return res.status(405).end(`Método ${req.method} não permitido`);
    }
}
