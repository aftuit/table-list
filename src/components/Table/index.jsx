
import React, { useState } from 'react'
import { Container, Table, Select, Wrapper, Input, Div } from './style'
import Item from '../Item'

const Table1 = () => {

    const [sortDown, setSortDown] = useState(false);
    const [search, setSearch] = useState('');

    const [tableData, setTableData] = useState(
        [
            { id: 1, name: "Farrux", email: "Farrux@gmail.com", date: "2000", status: "Student" },
            { id: 2, name: "Sardor", email: "Sardor@gmail.com", date: "1000", status: "Mentor" },
            { id: 3, name: "Atham", email: "Atham@gmail.com", date: "4000", status: "Assistant" },
            { id: 4, name: "Kamron", email: "Kamron@gmail.com", date: "5000", status: "Menedjer" },
            { id: 5, name: "Kamron", email: "Kamron@gmail.com", date: "5000", status: "Mentor" },
            { id: 6, name: "Davron", email: "Davron@gmail.com", date: "1000", status: "Programmer" },
            { id: 7, name: "Davron", email: "Davron@gmail.com", date: "1000", status: "Assistant" },
            { id: 8, name: "Bahrom", email: "Bahrom@gmail.com", date: "9000", status: "Student" },
            { id: 9, name: "Bahrom", email: "Bahrom@gmail.com", date: "9000", status: "Menedjer" },
            { id: 10, name: "Sarvar", email: "Sarvar@gmail.com", date: "6000", status: "Assistant" },
            { id: 11, name: "Sarvar", email: "Sarvar@gmail.com", date: "6000", status: "Menedjer" },
            { id: 12, name: "Sarvar", email: "Sarvar@gmail.com", date: "6000", status: "Programmer" },
        ]
    );
    const [Data, setData] = useState(tableData)
    const [searchData, setSearchData] = useState(tableData)
    const [searchBy, setSearchBy] = useState('')
    const onNameSort = () => {
        setSortDown(true)
        setTableData(tableData.sort((a, b) => (a.name > b.name) ? 1
            : ((b.name > a.name) ? -1
                : 0)))
    }
    const onFiltered = (e) => {
        setTableData(Data.filter(value =>
            (e.target.value === 'All') ? value : (e.target.value === value.status)))
    }
    const onDelete = (id) => {
        const newTableData = tableData.filter(value => value.id !== id)
        setTableData(newTableData);
        setData(newTableData)
    }
    const onSearch = () => {
        setTableData(searchData.filter(value => (search === '') ? value : (value[searchBy].toLowerCase() === search.toLowerCase())))
    }
    return (
        <Wrapper>
            <Div>
                <Input type="text" onChange={(e) => setSearch(e.target.value)} value={search} />
                <span style={{ cursor: 'pointer', color: 'white', margin: '0 10px' }} onClick={onSearch}>&#128269;</span>
                <select onChange={(e)=>setSearchBy(e.target.value)}  
                style={{
                    width: '100px',
                    padding: '10px',
                    borderRadius: '28px',
                    outline: 'none',
                    fontSize: '16px'
                }}>
                <option value="id">id</option>
                <option value="name">name</option>
                <option value="status">status</option>
                <option value="email">email</option>
                <option value="date">date</option>
            </select> 
            </Div>           
            <Container style={{ backgroundColor: "white" }}>
                <Table>
                    <Table.Head>
                        <Table.TR>
                            <Table.TH align="center"><input type="checkbox" /></Table.TH>
                            <Table.TH onClick={onNameSort}>Name</Table.TH>
                            <Table.TH>Email</Table.TH>
                            <Table.TH>Date</Table.TH>
                            <Table.TH>
                                <Select onChange={onFiltered}>
                                    <option value="All">All</option>
                                    <option value="Student">Student</option>
                                    <option value="Mentor">Mentor</option>
                                    <option value="Assistant">Assistant</option>
                                    <option value="Menedjer">Menedjer</option>
                                    <option value="Programmer">Programmer</option>
                                </Select>
                            </Table.TH>
                            <Table.TH>Action</Table.TH>
                        </Table.TR>
                    </Table.Head>
                    <Table.Body>
                        {
                            tableData.map(value =><Item key={value.id} onDelete={onDelete} value={value} />)
                        }
                    </Table.Body>
                </Table>
            </Container>
        </Wrapper>
    )
}

export default Table1;