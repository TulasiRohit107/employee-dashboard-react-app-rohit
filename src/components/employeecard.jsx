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


export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Box  sx={{ textAlign: "center"}}>
      <CardMedia
        sx={{ height: 200, width: 200, backgroundSize: "contain", margin: "auto", paddingTop: 2 }}
        image="profile4.png"
        title="profile image"
      />
      </Box>
      <CardContent>
        
        <Typography gutterBottom variant="h5" component="div">
        <EmojiNatureIcon />John Wick
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Department: UI/UX Designer
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Position: UI Designer
        </Typography>
        <Stack direction="row" spacing={1} sx= {{marginTop: 2, justifyContent: "center"}}>
      <Chip label="Figma" />
      <Chip label="Unity" />
      <Chip label="Sketch" />
    </Stack>
    <Stack direction="row" spacing={1}  sx= {{marginTop: 1, justifyContent: "center"}}>
      <Chip label="Active" variant="outlined" />
      <Chip label="20 hours" variant="outlined" />
    </Stack>
      </CardContent>
    </Card>
  );
}