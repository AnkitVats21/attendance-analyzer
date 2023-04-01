import DataList from "@/components/dataList"
import prisma from "@/lib/prisma"

export default function Venue({data}) {
    return <>
        <DataList data={data} type={'venue'} />
    </>
}

export async function getServerSideProps(req) {
    const data = await prisma.api_venue.findMany()
    return {
        props: {
            data
        }
    }
}