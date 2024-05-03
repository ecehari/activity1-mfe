import { useEffect, useRef } from "react";
import mount from 'paymentsadd/AddPayments';

const AddPaymentsRemote = () : JSX.Element => {

    const addPaymentesDiv = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        mount(addPaymentesDiv.current)
    },[]
    )

    return (
        <div ref={addPaymentesDiv} />
    )

}

export default AddPaymentsRemote;