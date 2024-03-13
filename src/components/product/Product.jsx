import React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import "./Product.css";

function Product({ data }) {
  console.log(data);

  return (
    <div className='container d-flex justify-content-center ' style={{ width: '140px' }}>
      <Box sx={{ minHeight: 200 }}>
        <Card
          className="shadow"
          id="product-card"
          variant='outlined'
          sx={(theme) => ({
            width: '240px',
            gridColumn: 'span 1',
            flexDirection: 'row',
            flexWrap: 'wrap',
            overflow: 'hidden',
            gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
            transition: 'transform 0.3s, border 0.3s',
            '&:hover': {
              borderColor: theme.vars.palette.primary.outlinedHoverBorder,
              transform: 'translateY(-2px)',
            },
            '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' },
            '@media (max-width: 600px)': {
              width: '100%', 
            },
          })}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              maxWidth: 150,
            }}
          >
            <Box className='d-flex justify-content-between' sx={{ display: 'flex' }}>
              <div>
                <Typography level="title-lg">
                  <Link
                    href="#container-responsive"
                    overlay
                    underline="none"
                    sx={{
                      color: 'text.primary',
                      '&.Mui-focusVisible:after': { outlineOffset: '-4px' },
                    }}
                  >
                    Lorem
                  </Link>
                </Typography>
                <Typography id="type" level="body-sm">Lorem..</Typography>
              </div>

              <IconButton
                size="sm"
                variant="plain"
                color="danger"
                sx={{ ml: 'auto', alignSelf: 'flex-start' }}
              >
                <i class="fa-solid fa-heart"></i>
              </IconButton>
            </Box>
            <img
              id='product-img'
              alt=""
              width={"100%"}
              src="https://www.plenaire.co/cdn/shop/products/LukeWeller-Plenaire_Ecom_Rose_Jelly_100ml.jpg?v=1694391217&width=1920"
            />
            <Box className='d-flex justify-content-between' sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>
              <div className='d-flex align-items-center shadow text-black '>
                <Typography level="body-xs"><span style={{ color: 'black', fontWeight:'800',fontSize:'23px'}}>$56</span></Typography>
              </div>
              <div className='d-flex align-items-center btn-md'>
                <button className='btn btn-success'>Buy Now</button>
              </div>
            </Box>
          </Box>
        </Card>
      </Box>
    </div>
  );
}

export default Product;
