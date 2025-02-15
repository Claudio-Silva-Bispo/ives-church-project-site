import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    if (req.method === 'GET') {
        try {
            const { db } = await connectToDatabase();
            const eventos = await db.collection('t_eventos').find().toArray();

            const eventosComId = eventos.map(evento => ({
                ...evento,
                id: evento._id.toString(),
            }));

            return res.status(200).json(eventosComId);
        } catch (error) {
            console.error('Erro ao buscar eventos:', error);
            return res.status(500).json({ error: 'Erro ao buscar eventos' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        return res.status(405).end(`Método ${req.method} não permitido`);
    }
}
