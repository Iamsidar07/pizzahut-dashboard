import { auth } from "@/auth";
import Container from "@/components/Container";

export default async function HelloPage() {
  const session = await auth();
  return (
    <Container className="p-4 pt-8 lg:pt-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold">
        Hello, {session?.user?.name}
      </h1>
    </Container>
  );
}
