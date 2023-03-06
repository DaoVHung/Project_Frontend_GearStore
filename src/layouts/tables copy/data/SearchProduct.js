import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { action_SearchProduct } from 'action/ActionAuth';
import { GET_LIST_PRODUCT } from 'action/ActionAuth';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchProduct() {
    const [dataSearch, setDataSeacrh ] = useState("")
    const dispatch = useDispatch()
   useEffect(()=>{
    dispatch(action_SearchProduct(dataSearch))
    },[dataSearch])
    if(dataSearch==""){
      dispatch(GET_LIST_PRODUCT())
    }
  return (
    <Box   sx={{ m: 3, mt:0, mb:-2, minHeight: 50 }} variant="contained" color="dark" >
      <AppBar position="relative" >
        <Toolbar   >
          <IconButton
            size="small"
            edge="start"
            color="error"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' },m: 2 }}
          >
          </Typography>
          <Search sx={{ mr:10, mt:1, mb:-1, minHeight: 50, color:"ThreeDDarkShadow",border:0,boxShadow:10,borderRadius:3  }} color={"error"}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
            type="text"
            placeholder="Search here ..."
            defaultValue={dataSearch}
            onChange={e => setDataSeacrh(e.target.value)}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}