import { auth } from "@clerk/nextjs/server";

let role: string | undefined;

(async () => {
  const { sessionClaims } = await auth();
  role = (sessionClaims?.metadata as { role?: string })?.role;
})();

export { role };
