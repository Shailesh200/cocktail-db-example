import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { getCategories, getGlasses } from "../../../core/APIService"
import { CircularProgress } from '@material-ui/core';


const searchFormStyles = makeStyles(theme => ({
  root: {
    paddingBottom: 32,
    paddingTop: 32,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  filter: {
    marginLeft: 10,
    width: "15em"
  },
  search: {
    width: "30%"
  },
  input: {
    borderRadius: 28,
    boxShadow: '0 5px 30px -5px rgba(0, 0, 0, 0.2)',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#e0e0e0',
      transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;',
    },
    '&:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#ff5722',
      },
    },
    '&:focus': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#ff5722',
      },
    },
  },
}));

export const SearchForm = (props) => {
  const { searchTerm, handleSearchTermChange, handleCategoryChange, selectedCategory, handleGlassChange, selectedGlass, currentSortBy, handleSortByChange } = props;
  const classes = searchFormStyles();
  const [categories, setCategories] = React.useState([]);
  const [glasses, setGlasses] = React.useState([]);

  const handleSubmit = (event) => {
    event.perventDefault();
  }
  const searchCocktail = (event) => {
    handleSearchTermChange(event.target.value);
  }

  const fetchCategories = async () => {
    if (categories.length === 0) {
      const categories = await getCategories();
      setCategories(categories)
    }
  }

  const fetchGlasses = async () => {
    if (glasses.length === 0) {
      const glasses = await getGlasses();
      setGlasses(glasses)
    }
  }

  return (
    <div className={classes.root}>
      <Container
        maxWidth="lg"
        component="form"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <FormControl className={classes.search} variant="outlined">
          <OutlinedInput
            name="searchInput"
            id="searchInput"
            className={classes.input}
            placeholder="Seacrh cocktails"
            inputProps={{ 'aria-label': 'Seacrh cocktails' }}
            onChange={searchCocktail}
            startAdornment={<InputAdornment position="start"><SearchIcon color="primary" /></InputAdornment>}
            labelWidth={0}
            value={searchTerm}
          />
        </FormControl>


        <FormControl className={classes.filter}>
          <InputLabel id="demo-simple-select-label">Sort</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currentSortBy}
            onChange={handleSortByChange}
            defaultValue=""
          >
            <MenuItem value={1}>A -&gt; Z</MenuItem>
            <MenuItem value={2}>Z -&gt; A</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.filter}>
          <InputLabel>Search by Categories</InputLabel>
          <Select
            value={selectedCategory}
            onOpen={fetchCategories}
            onChange={handleCategoryChange}
          >
            {
              categories.length > 0
                ? categories.map((category, index) => {
                  return (
                    <MenuItem key={index} value={category.strCategory}>{category.strCategory}</MenuItem>
                  )
                })
                : <CircularProgress />
            }
          </Select>
        </FormControl>
        <FormControl className={classes.filter}>
          <InputLabel>Search by Glasses</InputLabel>
          <Select
            value={selectedGlass}
            onOpen={fetchGlasses}
            onChange={handleGlassChange}
          >
            {
              glasses.length > 0
                ? glasses.map((glass, index) => {
                  return (
                    <MenuItem key={index} value={glass.strGlass}>{glass.strGlass}</MenuItem>
                  )
                })
                : <CircularProgress />
            }
          </Select>
        </FormControl>
      </Container>
    </div>
  );
}
