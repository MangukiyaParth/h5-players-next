import { Game } from '@/components/Game';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
    title: 'Games',
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    return (
        <Game id={id} />
    );
}