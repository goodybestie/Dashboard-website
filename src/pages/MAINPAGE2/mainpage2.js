import { Box , Typography} from "@mui/material"
import Image from "next/image"
import signal1 from "../IMAGES/Container/signal1.png"
import signal2 from "../IMAGES/Container/signal2.png"
import signal3 from "../IMAGES/Container/signal3.png"
import signal4 from "../IMAGES/Container/signal4.png"
import { IoMdTrendingUp } from "react-icons/io";

export default function MainPage2(){
    return(
        <Box sx={{}}>
            <Box sx={{display:"flex", gap:"1rem"}}>
                <Box sx={{background:"#ffffff", padding:"1rem",borderRadius:"14px"}}>
            <Box>
                <Image src={signal1} alt=""/>
            </Box>
            <Typography sx={{color:"#898989"}}>Total Order</Typography>
            <Typography sx={{fontWeight:"600"}}>350</Typography>
            <Box sx={{display:"flex", gap:"4px"}}>
            <Box sx={{display:"flex", gap:"2px"}}>
                <IoMdTrendingUp style={{color:"#34CAA5"}} />
                <Typography sx={{color:"#34CAA5"}}>23.5%</Typography>
            </Box>
            <Box>
                <Typography sx={{color:"#898989"}} >vs. previous month</Typography>
            </Box>
            </Box>
            </Box>
            <Box sx={{background:"#ffffff", padding:"1rem",borderRadius:"14px"}}>
            <Box>
                <Image src={signal2} alt=""/>
            </Box>
            <Typography sx={{color:"#898989"}}>Total Refund</Typography>
            <Typography sx={{fontWeight:"600"}}>270</Typography>
            <Box sx={{display:"flex", gap:"4px"}}>
            <Box sx={{display:"flex", gap:"2px"}}>
                <IoMdTrendingUp style={{color:"#ED544E"}} />
                <Typography sx={{color:"#ED544E"}}>23.5%</Typography>
            </Box>
            <Box>
                <Typography sx={{color:"#898989"}}>vs. previous month</Typography>
            </Box>
            </Box>
            </Box>
            </Box>
            <Box sx={{display:"flex", gap:"1rem", mt:"1rem"}}>
            <Box sx={{display:"flex", gap:"2rem"}}>
            <Box sx={{background:"#ffffff", padding:"1rem",borderRadius:"14px"}}>
                <Box>
            <Box>
                <Image src={signal3} alt=""/>
            </Box>
            <Typography sx={{color:"#898989"}}>Average Sales</Typography>
            <Typography sx={{fontWeight:"600"}}>1567</Typography>
            <Box sx={{display:"flex", gap:"4px"}}>
            <Box sx={{display:"flex", gap:"1px"}}>
                <IoMdTrendingUp style={{color:"#ED544E"}} />
                <Typography sx={{color:"#ED544E"}}>23.5%</Typography>
            </Box>
            <Box>
                <Typography sx={{color:"#898989"}}>vs. previous month</Typography>
            </Box>
            </Box>
            </Box>
            </Box>
            </Box>
                <Box sx={{background:"#ffffff", padding:"1rem",borderRadius:"14px"}}>
            <Box>
                <Image src={signal4} alt=""/>
            </Box>
            <Typography sx={{color:"#898989"}}>Total Income</Typography>
            <Typography sx={{fontWeight:"600"}}>$350.000</Typography>
            <Box sx={{display:"flex", gap:"4px"}}>
            <Box sx={{display:"flex", gap:"2px"}}>
                <IoMdTrendingUp style={{color:"#34CAA5"}} />
                <Typography sx={{color:"#34CAA5"}}>23.5%</Typography>
            </Box>
            <Box>
                <Typography sx={{color:"#898989"}}>vs. previous month</Typography>
            </Box>
            </Box>
            </Box>
            </Box>
        </Box>
    )
}