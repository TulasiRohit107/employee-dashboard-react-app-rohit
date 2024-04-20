import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


export default function MediaCard({ data }) {
  /* console.log(data); */
  return (
    <>
      {data.map((item, index) => (


          <Card sx={{ maxWidth: 345, paddingLeft: 2, paddingRight: 2, marginTop: 5 }}>
            <Box  sx={{ textAlign: "center"}}>
            <CardMedia
              sx={{ height: 200, width: 200, backgroundSize: "contain", margin: "auto", paddingTop: 2 }}
              image={`/employee-dashboard-react-app-rohit/${item.image}`}
              title="profile image"
            />
            </Box>
            <CardContent>
              
              <Typography gutterBottom variant="h5" component="div">
              <EmojiNatureIcon />
              {item.firstName} {item.lastName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Department: UI/UX Designer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Position: UI Designer
              </Typography>
              <Stack direction="row" flexWrap="wrap" spacing={1} sx= {{marginTop: 2, justifyContent: "center"}}>
                {item.skills.map((skill, skillIndex) => (
                  <Chip sx={{ marginTop: 2 }} key={skillIndex} label={skill} />
                ))}
          </Stack>
          <Stack direction="row" spacing={1}  sx= {{marginTop: 1, justifyContent: "center"}}>
            <Chip label={item.onLeave? "Inactive" : "Active"} variant="outlined" />
            <Chip label={`Hours: ${item.hoursLoggedThisWeek}`} variant="outlined" />
          </Stack>
            </CardContent>
          </Card>
        ))}
      </>
  );
}