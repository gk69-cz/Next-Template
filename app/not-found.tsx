import Link from "next/link";

export default function NotFound(){
    return(
        <div>
        <img src="/logo.png" alt="Airwise Logo" />
        <h2>Page Not Found</h2>
        <p>Oops! It seems like you've wandered off the beaten path.</p>
        <p>Let's get you back to familiar territory.</p>
        <Link href="/">
            <a>Go to Home Page</a>
        </Link>
    </div>
    )
}