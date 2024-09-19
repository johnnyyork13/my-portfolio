import styled from "styled-components";
import DialogBoxHeader from "./DialogBoxHeader";

export default function Email() {

    return (
        <>
            <DialogBoxHeader title="Email"></DialogBoxHeader>
                <div className="window-body">
                    <div className="field-row-stacked" style={{width: "200px"}}>
                        <label htmlFor="email-to">To:</label>
                        <input type="text" id="email-to" />
                    </div>
                </div>
        </>
    )
}