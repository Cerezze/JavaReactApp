import Link from 'next/link'

export default function Page() {
    let str = "CLICK HERE";
    return (<div>
        <Link href={`/dashboard/settings`}>{str}</Link>
    </div>)
  }