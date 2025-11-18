import Card from "@/components/Card"

const page = async ({ params }) => {
  return (
    <div><Card params={params} /></div>
  )
}

export default page