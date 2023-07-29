// import { getAuthSession } from "@/lib/auth";
// import { SubredditSubscriptionValidator } from "@/lib/validators/subreddit";

// export async function POST(req: Request){
//     try{
//         const session = await getAuthSession()

//         if (!session?.user){
//             return new Response("Unauthorized", {status: 401})
//         }

//         const body = await req.json()
//         const {name} = SubredditSubscriptionValidator.parse(body)


//     }
//     catch (err){}
// }