import { useEffect, useRef } from "react";
import mount from 'AddPayments/AddPayments';

const AddPaymentsRemote = () : JSX.Element => {

    const homePageDiv = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        mount(homePageDiv.current)
    },[]
    )

    return (
        <div ref={homePageDiv} />
    )

}

export default AddPaymentsRemote;