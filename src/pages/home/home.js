import BackGround from "./bg";
import Package from "./Pakage";
import StatsSection from "./StatsSection";
import TopSection from "./topSection";
import TripCard from "./tripCard";

export default function Home() {
    return (
        <>
            <BackGround />
            <TopSection />
        <Package />
        <TripCard />
        <StatsSection/>
        </>
    );
}
