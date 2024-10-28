"use client"
import { Button } from '@/components/ui/button';
import NavBar from '@/components/wrapper/navbar';
import Link from 'next/link';
import Stripe from 'stripe';
import { useRouter } from 'next/router';

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default function SuccessPage() {
  const router = useRouter();
  const { session_id } = router.query;

  if (!session_id || Array.isArray(session_id)) {
    // Handle the case where session_id is not present or is an array
    return <div>Error: session_id is missing or invalid</div>;
  }

  const fetchSession = async (sessionId: string) => {
    try {
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      return JSON.stringify(session, null, 2);
    } catch (error) {
      console.error('Error fetching session:', error);
      return 'Error fetching session';
    }
  };

  const sessionData = fetchSession(session_id);

  return (
    <main className="flex min-w-screen flex-col items-center justify-between">
      <NavBar />
      <h1 className="mt-[35vh] mb-3 scroll-m-20 text-5xl font-semibold tracking-tight transition-colors first:mt-0">
        Welcome to Nextjs Starter Kit 🎉
      </h1>
      <p className="leading-7 text-center w-[60%]">
        Let&apos;s get cooking
      </p>
      <Link href="/dashboard" className='mt-4'>
        <Button>Access Dashboard</Button>
      </Link>
    </main>
  );
}
