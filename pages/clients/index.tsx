import Link from "next/link";

export default function Page() {
  return (
    <div>
      <p>Welcome to /clients</p>
      <ul>
        <li>
          <Link href="/clients/1">Client 1</Link>
        </li>
        <li>
          <Link href="/clients/2">Client 2</Link>
        </li>
      </ul>
    </div>
  );
}
