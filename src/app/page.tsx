import {cookies} from 'next/headers';
import Content from '@/app/components/Content';

export default async function Home() {
  const userKey = cookies().get('authorized')?.value || '';
  return <Content userKey={userKey} />;
}
