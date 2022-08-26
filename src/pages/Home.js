import './Home.css'
import WelcomeBox from "../components/main/WelcomeBox";
import SectionCard from "../components/main/SectionCard";
import Introduction from "../components/main/Introduction";
import React from "react";

export default function Home() {
    return (
        <div id='home'>
            <WelcomeBox/>
            <SectionCard>
                <Introduction/>
            </SectionCard>
        </div>

    );
}
