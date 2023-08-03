export async function gett() {
    const res = await fetch(`http://localhost:8080/test`,
    {cache: 'no-store' })
    return res.json()
  }

  export async function postt() {
    const res = await fetch(`http://localhost:8080/test`,
    {
        cache: 'no-store',
        method: "POST",
        body: "HEELLLOO TO U TOOO"
    })
  }

export default async function Page() {

    const getData = gett()

    const [data1] = await Promise.all([getData])

    console.log(data1.testStr, "WHAT??")

    postt();

    return <h1>DASHBOARD/settings{data1.testStr}</h1>
  }