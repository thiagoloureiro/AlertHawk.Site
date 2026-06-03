import type { Metadata } from 'next';
import Link from 'next/link';
import { siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy — AlertHawk',
  description: 'AlertHawk privacy policy for the marketing website and related services.',
  alternates: {
    canonical: '/privacy',
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 text-gray-100">
      <p>
        <Link href="/" className="text-purple-400 hover:text-purple-300">
          ← Back to AlertHawk
        </Link>
      </p>
      <h1 className="mt-4 text-3xl font-bold text-white">Privacy Policy</h1>
      <p className="mt-2 text-gray-400">
        <em>Last updated: May 29, 2026</em>
      </p>

      <div className="prose prose-invert mt-8 max-w-none space-y-6 leading-relaxed text-gray-300">
        <p>
          This page describes how AlertHawk handles information when you visit{' '}
          <a href={siteUrl} className="text-purple-400 hover:text-purple-300">
            alerthawk.net
          </a>{' '}
          (the marketing website). For the self-hosted AlertHawk product deployed in your own
          infrastructure, you control the data processed by that deployment.
        </p>

        <section>
          <h2 className="text-xl font-semibold text-gray-100">Information we collect on this website</h2>
          <p className="mt-3">
            We may collect standard web analytics data (such as pages visited, browser type, and
            approximate location) through hosting and analytics providers. If you use the live chat
            widget, messages you send may be processed by our chat provider.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-100">Cookies and similar technologies</h2>
          <p className="mt-3">
            The site may use cookies or local storage for language preference and basic
            functionality. Third-party scripts (for example live chat) may set their own cookies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-100">How we use information</h2>
          <p className="mt-3">
            We use collected information to operate and improve the website, respond to inquiries,
            and understand aggregate usage patterns.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-100">Third-party services</h2>
          <p className="mt-3">
            This site may link to external services such as GitHub, documentation, app stores, and
            Artifact Hub. Those services have their own privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-100">Contact</h2>
          <p className="mt-3">
            Questions about this policy can be sent via the contact options on the{' '}
            <Link href="/" className="text-purple-400 hover:text-purple-300">
              home page
            </Link>{' '}
            or through our GitHub repository.
          </p>
        </section>
      </div>
    </main>
  );
}
