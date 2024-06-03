import CountdownTimer from "@/components/ContdownTimer";
import styles from "./page.module.css";
import { isDateInPast } from "@/helper";
import Hero from "@/components/Hero";

const countdownDate = new Date('2024-05-19T23:18:07')

export default function Home() {
  return (
    <main className={styles.main}>
      {
        !isDateInPast(countdownDate) &&
        <CountdownTimer
          deadline={countdownDate}
          title={'Discount ends in'}
        />
      }

      <Hero />
    </main>
  );
}
