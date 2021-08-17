import styled from 'styled-components'
import '../../index.css'

import {ReactComponent as edit} from '../../icons/pencil.svg'
import {ReactComponent as check} from '../../icons/check.svg'
import {ReactComponent as remove} from '../../icons/remove.svg'

export const Icon = styled.div``

Icon.Edit = styled(edit)``
Icon.Ckeck = styled(check)``
Icon.Remove = styled(remove)``

export const Container = styled.div`
display: flex;
margin-top: 60px;
`

export const Wrapper = styled.div`
margin: 100px;
`

export const Div = styled.div`
display: flex;
justify-content: space-between;
width: 30%;
align-items: center;
border: 1px solid black;
padding-left: 10px;
border-radius: 28px;
box-shadow: -10px 10px 10px #b1b0b5;
overflow: hidden;
`
export const Input = styled.input`
padding: 10px;
width: 80%;
font-size: 18px;
outline: none;
border: none;
border-bottom: 1px solid whitesmoke;
`

export const Table = styled.table`
width: 100%;
border: 1px solid black;
border-collapse: collapse;
`
Table.Head = styled.thead``
Table.Body = styled.tbody``
Table.TR = styled.tr`
:nth-child(odd){
    background-color: lightgray;
}
`

Table.TH = styled.th`
text-align: ${({align})=>align? "center" : "start"};
padding: 10px;
border: 1px solid black;`

Table.TD = styled.td`
padding: 10px;
width: 500px;
text-align: ${({align}) => align};
border: ${({borderr}) => borderr? 'none' : '1px solid black'};
display: ${({d_flex}) => d_flex? "flex": "default"};
justify-content: ${({j_between}) => j_between? "space-between" : "default"};
cursor: ${({onDeleted})=>onDeleted? 'pointer': 'default'};
    :hover{
        background-color: ${({deleted})=> deleted? "darkblue": "default"};
        color: ${({deleted})=> deleted? "white": "default"};
        font-weight: ${({deleted})=> deleted? "bold": "default"};;
    }
`
export const Span = styled.span`
cursor: pointer;
font-weight: bold;
margin: 0 7px;
box-sizing: border-box;
transform: rotate(${({rotate}) => rotate? '90deg' : '0'});
:active{
    transform: scale(1.3) rotate(${({rotate}) => rotate? '90deg' : '0'});
    
}
`
export const Select = styled.select`
border: none;
outline: none;
width: 100%;
background-color: transparent;
font-size: 16px;
font-weight: bold;
`

export const Img = styled.img`
width: 15px;
height: 15px;
`

export const Button = styled.button`
padding: 5px;
/* margin-left: 100px; */
`