export async function gett() {
    const res = await fetch(`http://localhost:8080/test`,
    {cache: 'no-store' })
    return res.text()
  }

  export async function postt() {
    let json1 = {
      "Student_ID": 10206,
      "Department": "ME",
      "First_Name": "Dan",
      "Last_Name":"Kyritz",
      "PassOutYear":2020,
      "UniversityRank": 402
    }
    const res = await fetch(`http://localhost:8080/test`,
    {
        cache: 'no-store',
        method: "POST",
        body: JSON.stringify(json1)
    })
  }

export default async function Page() {

    const getData = gett()

    const [data1] = await Promise.all([getData])

    console.log(JSON.parse(data1).testStr, "WHAT??")

    postt();

    return <h1>DASHBOARD/settings{data1}</h1>
  }