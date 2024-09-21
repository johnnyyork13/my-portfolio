import styled from "styled-components";
import { Children } from "react";
import { DialogBoxInterface } from "../interfaces/default";

export default function Email(props: {
    openedDialogBoxes: DialogBoxInterface[],
}) {
    
    
    

    return (
        <div className="window-body">
            <div className="field-row-stacked" style={{width: "500px"}}>
                <label htmlFor="from">From:</label>
                <input type="text" id="from" />
            </div>
            <div className="field-row-stacked" style={{width: "500px"}}>
                <label htmlFor="email-to">Message:</label>
                <textarea id="email-to"></textarea>
            </div>
        </div>
    )
}