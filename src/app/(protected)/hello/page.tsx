import { auth } from "@/auth"
import Container from "@/components/Container"

export default async function HelloPage(){
    const session = await auth()
    return <Container className="p-4 pt-12 lg:pt-20">
        <h1 className="text-4xl lg:text-5xl text-center">Hello, {session?.user?.name}</h1>
    </Container>
}