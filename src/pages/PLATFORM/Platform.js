import { Box, Typography } from "@mui/material"
import Image from "next/image"
import progressbar1 from "../IMAGES/Container/progressbar1.png"
import progressbar2 from "../IMAGES/Container/progressbar2.png"
import progressbar3 from "../IMAGES/Container/progressbar3.png"
import progress from "../IMAGES/Container/progress.png"
export default function PlatForm(){
    return(
        <Box   sx={{ background: '#ffffff', padding: '1rem', borderRadius: '14px', mt: '1rem', width: '40%', height: '' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', ml: '', mb: '1rem' }}>
        <Typography sx={{ color: '#26282C', fontWeight: '600' }}>Top PlatForm</Typography>
        <Typography sx={{ color: '#34CAA5', fontWeight: '500' }}>See All</Typography>
      </Box>
      <Box>
        <Typography sx={{ color: '#26282C', fontWeight: '600' }}>Book Bazaar</Typography>
        <Image src={progressbar1} alt="" className="progress"/>
        <Box sx={{ display: 'flex',
         justifyContent: 'space-between',
           mb: '1rem'}}>
            <Typography> $2,500,000</Typography>
            <Typography>+15%</Typography>
        </Box>
      </Box>
      <Box>
        <Typography sx={{ color: '#26282C', fontWeight: '600' }}>Artisan Aisle</Typography>
        <Image src={progressbar2} alt="" className="progress" />
        <Box sx={{ display: 'flex',
         justifyContent: 'space-between',
           mb: '1rem'}}>
            <Typography> $1,800,000</Typography>
            <Typography>+10%</Typography>
        </Box>
      </Box>
      <Box className="pro">
        <Typography sx={{ color: '#26282C', fontWeight: '600' }}>Toy Troop</Typography>
        <Image src={progressbar3} alt="" className="progress"/>
        <Box sx={{ display: 'flex',
         justifyContent: 'space-between',
           mb: '1rem'}}>
            <Typography> $1,200,000</Typography>
            <Typography>+8%</Typography>
        </Box>
      </Box>
      <Box>
      <Typography sx={{ color: '#26282C', fontWeight: '600' }}>XStore</Typography>
      <Image src={progress} alt="" className="progress"/>
      <Box sx={{ display: 'flex',
         justifyContent: 'space-between',
          }}>
            <Typography> $1,000</Typography>
            <Typography>+4%</Typography>
        </Box>
      </Box>
        </Box>
    )
}