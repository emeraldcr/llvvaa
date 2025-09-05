import { redirect } from 'next/navigation';
import { defaultLocale } from '../lib/i18n';

// This page only renders when the user visits the root path.
// We redirect to the default locale.
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}