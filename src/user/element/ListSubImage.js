import React from 'react'

export default function ListSubImage(props) {
    const {
        subLink
    } = props.todo
    // console.log("PROPS", subLink);

    return (
        <div className="sub-image">
            <img width={"120px"} height={"120px"} src={subLink} />

        </div>

    )

}
