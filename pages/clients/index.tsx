import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [clients, setClients] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then(setClients);
  }, []);

  return (
    <div>
      <p>Client List:</p>
      <ul>
        {clients.map((c) => (
          <li key={c.id}>
            <Link href={"/clients/" + c.id}>{c.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
