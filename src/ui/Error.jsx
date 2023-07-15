import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      {error.message && <p>{error.message}</p>}
      {error.statusText && <p>{error.statusText}</p>}
      {error.data && <p>{error.data}</p>}

      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
