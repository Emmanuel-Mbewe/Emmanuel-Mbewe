import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <ul>
        <li>
          <Link href="/posts/first-post">First Post</Link>
        </li>
        <li>
          <Link href="/posts/second-post">Second Post</Link>
        </li>
      </ul>
    </div>
  );
}
