import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const [client, setClient] = useState("");
  const clientId = router.query.id;

  useEffect(() => {
    console.log({ clientId });
    if (clientId)
      fetch("https://jsonplaceholder.typicode.com/users/" + clientId)
        .then((resp) => resp.text())
        .then(setClient);
  }, [clientId]);

  return (
    <div>
      <p>Viewing info for client ID: {clientId}</p>
      <br />
      <p>{client}</p>
    </div>
  );
}
