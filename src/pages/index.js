import styles from '@/styles/Home.module.css'
import MonthlyAttendanceChart from '@/components/areaChart';
import StrengthMeasureChart from '@/components/pieChart';
import { useEffect, useState } from 'react';
import BarChart from '@/components/barChart';


export default function Dashboard({ data }) {
    const [showChild, setShowChild] = useState(false)

    useEffect(() => {
        setShowChild(true)
    }, [])


    return showChild && <>
        <main className={styles.main}>
            <MonthlyAttendanceChart />
            <StrengthMeasureChart />
            <BarChart />

            <button onClick={async () => {
                const data = await fetch('api/hello')
                const jd = await data.json();
                console.log(jd)
            }}>fetch api</button>
        </main >

    </>
}

