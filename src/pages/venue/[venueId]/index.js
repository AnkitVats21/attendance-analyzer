import prisma from '@/lib/prisma';
import Table from '@/components/dataList';

export default function Branch({data}) {
    return <>
        <h1>{data.name} Classrooms</h1>
        <h2>Current Period IV</h2>
        <Table data={data.api_classroom} />
    </>
}

export async function getServerSideProps(context) {
    const id = parseInt(context.query.venueId)
    const data = await prisma.api_venue.findUnique(
        {
            where: {
                id: id
            },
            include: {
                api_classroom:true
            }
        }
    )
    console.log(data)
    return {
        props: {
            data
        }
    }
}