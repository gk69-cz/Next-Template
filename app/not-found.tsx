import Link from "next/link";

export default function NotFound(){
    return(
        <div>
        <h2>Page Not Found</h2>
        <p>Oops! It seems like you have wandered off the beaten path.</p>
        <p>Let us get you back to familiar territory.</p>
        <Link href="/">
            <a>Go to Home Page</a>
        </Link>
    </div>
    )
}