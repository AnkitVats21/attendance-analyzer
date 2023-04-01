import prisma from '@/lib/prisma';
import Table from '@/components/dataList';

export default function Branch({data}) {
    return <>
        <h3>{data.name} Classes</h3>
        <Table data={data.api_class} />
    </>
}

export async function getServerSideProps(context) {
    console.log(context.query.sectionId)
    const id = parseInt(context.query.sectionId)
    const data = await prisma.api_section.findUnique(
        {
            where: {
                id: id
            },
            include: {
                api_class:true
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