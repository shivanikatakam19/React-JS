// groups a list of children without adding a extra nodes in the dom
// we can declare it by <React.Fragment> & </React.Fragment> or <> & </>
// in the below code the function returns multiple td's to a component if we use div instead of fragment it causes an error 
// as div cannot be a child of tr tag

import React from 'react'

export default function ReactFragments({ rowData }) {
    return (
        // <>
        <React.Fragment>
            <td>{rowData.name}</td>
            <td>{rowData.email}</td>
        </React.Fragment>
        // </>
    )
}