import { Privacy } from '@/components/Privacy';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
    title: 'Pricy Policy',
    description: 'privacy policy of H5 Players.',
};

export default async function Page() {
    
    return (
        <Privacy />
    );
}

