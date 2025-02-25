import { Terms } from '@/components/Terms';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
    title: 'Terms of Service',
    description: 'Terms of Service for H5Players',
};

export default async function Page() {
    
    return (
        <Terms />
    );
}

