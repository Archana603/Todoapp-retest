import { Typography,Button,Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import React, { useState } from 'react'

const Homepage = () => {
  const [inputarr,setInputarr]=useState([])

  const [todo, setTodo] = useState('');
  const [desc, setQuan] = useState('');

  const changetodo = (event)=>{
    setTodo(event.target.value);
  };
  const changequan=(event)=>{
    setQuan(event.target.value);
  };

  const transferValue = (event) => {
    setInputarr([...inputarr,{todo,desc}])
    };
   

  
  
  const tableRows=inputarr.map((info)=>{
    return(
      <TableRow id="trow">
        <TableCell>{info.todo}</TableCell>
        <TableCell>{info.desc}</TableCell>
        <TableCell><Button>Delete</Button></TableCell>
        <TableCell><Button>Update</Button></TableCell>
      </TableRow>
    )

  });
   
  

  return (
     <div className="container">
<div className="bag">
      <Typography variant='h4' className="head">ToDo LIST</Typography>
      <br />
      <input type="text" name="todo" id="task" value={todo} placeholder='Enter a Todo..' onChange={changetodo} />
      <br /><br />
      <input type="text" name="desc" id="desc" value={desc} placeholder='Description..' onChange={changequan} />
      <br /><br />
      <Button type='submit' id="but" variant="contained" onClick={transferValue}>Add</Button>
    <br /><br />
   
    <Table border="1" width="100%" id="table">
      <TableHead>
        <TableRow>
          <TableCell>TODO</TableCell>
          <TableCell>DESCRIPTION</TableCell>
          </TableRow>
        </TableHead>
      <TableBody>{tableRows}</TableBody>
    </Table>
    </div>
    </div>
   
    
  );
        
  }


export default Homepage;