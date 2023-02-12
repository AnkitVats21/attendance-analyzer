import styles from '@/styles/Home.module.css'
import Example from "@/components/liveAttendanceChart";
import MonthlyAttendanceChart from '@/components/areaChart';
import StrengthMeasureChart from '@/components/pieChart';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import VenueAttendance from '@/components/venueAttendance';


export default function Dashboard() {
    const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

    return showChild && <>
        <main className={styles.main}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={8}>
                    <Example />
                    <MonthlyAttendanceChart />
                </Grid>
                <Grid item xs={4}>
                    <StrengthMeasureChart />
                    <VenueAttendance/>
                </Grid>
                
            </Grid>
        </main>

    </>
}