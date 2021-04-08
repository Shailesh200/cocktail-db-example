import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { SearchForm } from '../elements/SearchForm/SearchForm';
import { CocktailList } from '../elements/CocktailList/CocktailList';
import { filterByCategory, filterByGlass, searchCocktails } from "../../core/APIService";

export const Home = () => {
  const [loading, setLoading] = useState(false);
  const [initial, setInitial] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [cocktails, setCocktails] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedGlass, setSelectedGlass] = useState('')

  const [currentSortBy, setSortBy] = useState('')

  useEffect(() => {
    if (searchTerm === '') {
      setInitial(true);
    } else {
      const timer = setTimeout(() => {
        setInitial(false);
        setLoading(true);
        const getDrinks = async () => {
          try {
            const drinks = await searchCocktails(searchTerm);
            if (drinks) {
              const newCocktails = drinks.map(element => {
                const { idDrink, strDrink, strDrinkThumb, strAlcoholic } = element;
                return {
                  id: idDrink,
                  name: strDrink,
                  image: strDrinkThumb,
                  alcoholic: strAlcoholic
                };
              });
              setCocktails(newCocktails);
            } else {
              setCocktails([]);
            }
          } catch (error) {
            console.log('error: ', error);
          }
          setLoading(false);
        }
        getDrinks();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [searchTerm]);


  const handleCategoryChange = (event) => {
    setSearchTerm("")
    setSelectedCategory(event.target.value);
  };

  const handleGlassChange = (event) => {
    setSearchTerm("")
    setSelectedGlass(event.target.value);
  }

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  }


  useEffect(() => {
    if (currentSortBy === 1) {
      setInitial(false);
      setLoading(true);
      let newCocktails = cocktails.sort((a, b) => {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
      })
      setCocktails([...newCocktails])
      setLoading(false);
      setSortBy("")
    }

    if (currentSortBy === 2) {
      setInitial(false);
      setLoading(true);
      let newCocktails = cocktails.sort((a, b) => {
        if (a.name > b.name) { return -1; }
        if (a.name < b.name) { return 1; }
        return 0;
      })
      setCocktails([...newCocktails])
      setLoading(false);
      setSortBy("")
    }
  }, [currentSortBy, cocktails])

  useEffect(() => {
    if (selectedGlass === '') {
      setInitial(true);
      return
    };

    const filterUsingGlass = async () => {
      setInitial(false);
      setLoading(true);
      const result = await filterByGlass(selectedGlass)

      if (result) {
        const newCocktails = result.map(element => {
          const { idDrink, strDrink, strDrinkThumb } = element;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    }

    filterUsingGlass()


  }, [selectedGlass])


  useEffect(() => {
    if (selectedCategory === '') {
      setInitial(true);
      return
    };

    const filterUsingCategory = async () => {
      setInitial(false);
      setLoading(true);
      const result = await filterByCategory(selectedCategory)

      if (result) {
        const newCocktails = result.map(element => {
          const { idDrink, strDrink, strDrinkThumb } = element;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    }

    filterUsingCategory()


  }, [selectedCategory])



  return (
    <>
      <SearchForm
        searchTerm={searchTerm}
        handleSearchTermChange={setSearchTerm}
        handleCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
        handleGlassChange={handleGlassChange}
        selectedGlass={selectedGlass}
        sortBy={currentSortBy}
        handleSortByChange={handleSortByChange}
      />
      <Container maxWidth="lg">
        <CocktailList loading={loading} cocktails={cocktails} initial={initial} />
      </Container>
    </>
  );
}
