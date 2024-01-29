import { Box, Typography } from "@mui/material"
import { IoChevronDown } from "react-icons/io5";
import Line from "../IMAGES/Container/Line.png"
import Bar from "../IMAGES/Container/Bar.png"
import Image from "next/image";
export default function MainPage(){
    return(
        <Box sx={{background:"#ffffff", padding:"1rem",borderRadius:"14px", width:{md:"64%", xs:"50%"}, height:"22rem"}} >
        <Box sx={{ display:"flex", justifyContent:"space-around"}}>
            <Box >
            <Typography sx={{color:"#000", fontWeight:"600", fontSize:"18px",marginLeft:"-11rem",}}>
            Sales Trends
            </Typography>
            </Box>
            <Box sx={{
                display:" flex", 
                gap:"8px", 
                marginRight:"-10rem",
               
            }}>
            <Box>
            <Typography sx={{fontSize:"14px"}}>
            Short by:
            </Typography>
            </Box>
            <Box sx={{display:" flex", gap:"8px", 
            outline:"#E1DFDF solid 1px", 
            borderRadius:"20px", 
             background:"#ffffff",
             padding:"5px 12px 2px 12px",
             width:"6rem",
             marginTop:"-5px"}}>
            <Typography sx={{fontSize:"14px"}}>
             Weekly
            </Typography>
            <Box>
            <IoChevronDown style={{   marginTop:"4px" }}/>
            </Box>
            </Box>
            </Box>
        </Box>
        <Box>
            <Box sx={{display:"flex", mt:"1rem", gap:"10px" }}>
                <Box sx={{display:"flex", flexDirection:"column", gap:"1rem", color:"#898989"}}>
                    <Typography>50.000</Typography>
                    <Typography>40.000</Typography>
                    <Typography>30.000</Typography>
                    <Typography>20.000</Typography>
                    <Typography>10.000</Typography>
                    <Typography>5.000</Typography>
                    <Typography>0.000</Typography>
                </Box>
                <Box>
                    <Image src={Line} alt="" style={{width:"39rem"}}/>
                    <Image src={Bar} alt="" style={{width:"39rem", marginTop:"-20rem",marginBottom:"24px"}}/>
                </Box>
            </Box>
            <Box sx={{display:"flex",  gap:"1.7rem", ml:"3.9rem", mt:"-1.4rem", color:"#898989"}}>
                <Typography>Jan</Typography>
                <Typography>Feb</Typography>
                <Typography>Mar</Typography>
                <Typography>Apr</Typography>
                <Typography>May</Typography>
                <Typography>Jun</Typography>
                <Typography>Jul</Typography>
                <Typography>Aug</Typography>
                <Typography>Sep</Typography>
                <Typography>Oct</Typography>
                <Typography>Nov</Typography>
                <Typography>Dec</Typography>
            </Box>
            </Box>
        </Box>
    )
}