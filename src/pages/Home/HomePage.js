import React, { useEffect, useReducer } from 'react'; // Change 'useInsertionEffect' to 'useEffect'
import { getAll, getAllByTag, getAllTags, search } from '../../services/foodService';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import { useParams, useSearchParams } from 'react-router-dom';
import Search from '../../components/Search/Search';
import Tags from '../../components/Tags/Tags';
import NotFound from '../../components/NotFound/NotFound';

const initialState = { foods: [], tags: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case 'FOODS_LOADED': // Corrected action type
      return { ...state, foods: action.payload };

    case 'TAGS_LOADED': // Corrected action type
      return { ...state, tags: action.payload };

    default:
      return state;
  }
};

export default function HomePage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { foods, tags } = state;
  const {searchTerm,tag} = useParams();

  useEffect(() => {
    getAllTags().then(tags =>dispatch({type: 'TAGS_LOADED', payload: tags}));

    const loadFoods = tag 
    ? getAllByTag (tag)
    :searchTerm
    ? search(searchTerm)
    : getAll();

    loadFoods.then(foods => dispatch({ type: 'FOODS_LOADED', payload: foods })); // Corrected action type
  }, [searchTerm, tag]);

  return (
    <>
      <Search /> 
      <Tags tags = {tags}/>
      {foods.length === 0 && <NotFound linkText="Reset Search"/>}
      <Thumbnails foods={foods} />
      
    </>
  );
}
 