import { useEffect, useRef } from "react";
import mount from 'staticpage/HomePage';

const HomePageRemote = () : JSX.Element => {

    const homePageDiv = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        mount(homePageDiv.current)
    },[]
    )

    return (
        <div ref={homePageDiv} />
    )

}

export default HomePageRemote;