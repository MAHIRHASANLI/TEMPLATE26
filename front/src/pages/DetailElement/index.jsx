import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useParams } from 'react-router-dom';
import { DeleteById, GetById } from '../../api/requests';
import Swal from 'sweetalert2';
import { useGlobalData } from '../../globall';

const DetailElement = () => {
  const {id} = useParams()
  const [global, setGlobal] = useGlobalData();
  const [ count, setCount] = React.useState("")
  React.useEffect(()=>{
    GetById(id).then(res=>{
      setCount(res)
    })
  },[id])
  return (
    <div className='detail'>
                        <Card
                   
                   sx={{ width: "340px", height: "260px" }}
                 >
                  <div className='dddd'>
                  <i  className={count.image}></i>
                  </div>
                   <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                       {count.name}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                       {count.title}
                     </Typography>
                   </CardContent>
                   <CardActions>
                     <Button style={{display:"block", margin:"0 auto"}}
                       variant="contained"
                       size="small"
                       onClick={(_id) => {
                         Swal.fire({
                           title: "Are you sure?",
                           text: "You won't be able to revert this!",
                           icon: "warning",
                           showCancelButton: true,
                           confirmButtonColor: "#3085d6",
                           cancelButtonColor: "#d33",
                           confirmButtonText: "Yes, delete it!",
                         }).then((result) => {
                           if (result.isConfirmed) {
                             DeleteById(count._id)
                             setGlobal(global.filter(m=>m._id!==count._id))
                             Swal.fire(
                               "Deleted!",
                               "Your file has been deleted.",
                               "success"
                             );
                           }
                         });
                       }}
                     >
                       Delete
                     </Button>
                   </CardActions>
                 </Card>
    </div>
  )
}

export default DetailElement
