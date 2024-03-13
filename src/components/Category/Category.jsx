import React from 'react';
import sample from '../../assets/Home/sample-1.avif';
import './Category.css';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
function Category() {
  const data =[{
    img:sample,
    title:'lorem',
  },
  {
    img:sample,
    title:'lorem'
  },
  {
    img:sample,
    title:'lorem'
  },
  {
    img:sample,
    title:'lorem'
  }]

  return (
    <div className='row'>
    {
      data.length>0?
      data.map((item)=>(
        <div className='col-lg-3'>
     <Box
      component="ul"
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
    >
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover>
          <img
            src={item.img}
            srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </CardCover>
        <CardContent>
          <Typography
            level="body-lg"
            fontWeight="lg"
            textColor="red"
            mt={{ xs: 12, sm: 18 }}
          >
            {item.title}
          </Typography>
        </CardContent>
      </Card>
    </Box>
     </div>
      )):<p>no data</p>
    }
    </div>
  );
}

export default Category;
