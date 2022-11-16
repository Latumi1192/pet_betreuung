import Button from "@mui/material/Button/Button";
import { useRouter } from "next/router";
import * as React from "react";

export default function SignUpWarning() {
  const router = useRouter();
  return (
    <div>
      <div>Fail to SignUp. Check the input again</div>
      <Button
        onClick={() => {
          router.push("signup");
        }}
      >
        Return
      </Button>
    </div>
  );
}
