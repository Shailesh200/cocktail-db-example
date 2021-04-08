const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1"


export const searchCocktails = async (searchTerm) => {
  try {
    const result = await (
      await fetch(
        `${BASE_URL}/search.php?s=${searchTerm}`)
    ).json();
    const { drinks } = result;
    if (drinks) {
      return drinks;
    } else {
      throw new Error("No Categories found")
    }
  } catch (error) {
    console.log('error: ', error);
  }
}


export const getCategories = async () => {
  try {
    const result = await (
      await fetch(
        `${BASE_URL}/list.php?c=list`)
    ).json();
    const { drinks } = result;
    if (drinks) {
      return drinks;
    } else {
      throw new Error("No Categories found")
    }
  } catch (error) {
    console.log('error: ', error);
  }
}

export const getGlasses = async () => {

  try {
    const result = await (
      await fetch(
        `${BASE_URL}/list.php?g=list`)
    ).json();
    const { drinks } = result;
    if (drinks) {
      return drinks;
    } else {
      throw new Error("No Glasses found")
    }
  } catch (error) {
    console.log('error: ', error);
  }
}


export const filterByCategory = async (category) => {
  try {
    const result = await (
      await fetch(
        `${BASE_URL}/filter.php?c=${category}`)
    ).json();
    const { drinks } = result;
    if (drinks) {
      return drinks;
    } else {
      throw new Error("No Categories found")
    }
  } catch (error) {
    console.log('error: ', error);
  }
}

export const filterByGlass = async (glass) => {
  try {
    const result = await (
      await fetch(
        `${BASE_URL}/filter.php?g=${glass}`)
    ).json();
    const { drinks } = result;
    if (drinks) {
      return drinks;
    } else {
      throw new Error("No Glasses found")
    }
  } catch (error) {
    console.log('error: ', error);
  }
}