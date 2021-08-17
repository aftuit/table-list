
import React, { useState } from 'react';
import { Table } from '../Table/style'
const Item = ({ value, onDelete }) => {

    const [isEdit, setEdit] = useState(true);

    const [email, setEmail] = useState(value.email)

    const onEdit = (id) => {
        setEdit(!isEdit)
        document.getElementById(value.id).focus();
    }

    const onSaveEdit = (id) => {
        setEdit(!isEdit)
        value.email = email
    }

    const CancelUpdate = (id) => {
        setEdit(!isEdit)
        document.getElementById(value.id).value = value.email;
    }
    return (
        <Table.TR key={value.id}>
            <Table.TD align="center"><input type="checkbox" /></Table.TD>
            <Table.TD>{value.name} </Table.TD>
            <Table.TD d_flex j_between>
                <input id={value.id}

                    style={{
                        backgroundColor: isEdit ? 'transparent' : 'white',
                        border: !isEdit ? '2px solid black' : 'none',
                        disabled: !isEdit ? 'true' : 'false',
                        pointerEvents: isEdit && 'none',
                        fontSize: '16px',
                        outline: 'none',
                        borderRadius: '4px',
                        width: '60%'
                    }}
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    defaultValue={value.email}
                />
                {
                    isEdit ?
                        <span onClick={() => onEdit(value.id)} style={{ cursor: 'pointer' }}>&#9998;</span> :

                        <span>
                            <span onClick={() => onSaveEdit(value.id)}
                                style={{
                                    cursor: 'pointer',
                                    padding: '5px'
                                }}>
                                &#9989;</span>
                            <span onClick={CancelUpdate}
                                style={{
                                    cursor: 'pointer',
                                    padding: '5px'
                                }}>
                                &#10060;</span>
                        </span>
                }
            </Table.TD>
            <Table.TD>{value.date}</Table.TD>
            <Table.TD>{value.status}</Table.TD>
            <Table.TD deleted='true' onClick={() => onDelete(value.id)}>Delete</Table.TD>
        </Table.TR>
    )
}
export default Item;