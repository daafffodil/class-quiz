import Link from 'next/link';

export default function AdminPage() {
  return (
    <main className="page">
      <div className="card">
        <h1>Admin system coming soon.</h1>
        <p className="muted">Future features may include:</p>
        <ul>
          <li>Question bank upload</li>
          <li>Quiz set management</li>
          <li>Classroom statistics</li>
        </ul>
        <Link href="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
