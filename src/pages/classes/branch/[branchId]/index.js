import prisma from '@/lib/prisma';
import Table from '@/components/dataList';

export default function Branch({data}) {
    return <>
        <h1>{data.name} Sections</h1>
        <h2>Current Period IV</h2>
        <Table data={data.api_section} />
    </>
}

export async function getServerSideProps(context) {
    const id = parseInt(context.query.branchId)
    const data = await prisma.api_branch.findUnique(
        {
            where: {
                id: id
            },
            include: {
                api_section:true
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