import { auth } from "@/auth"

export default async function HelloPage(){
    const session = await auth()
    return <div className="container mx-auto">

        <h1>W</h1>

    </div>
}