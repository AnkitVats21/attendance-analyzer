import Table from '@/components/dataList';
import prisma from '@/lib/prisma';

export default function CollapsibleTable({ branches }) {
  return <>
    <h1>Branches</h1>
    <h2>Current Period IV</h2>
    <Table data={branches}/>
  </>
}

export const getServerSideProps = async ({ req }) => {
  const branches = await prisma.api_branch.findMany();
  return { props: { branches } }
}