import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOGPOST':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    case 'DELETE_BLOGPOST':
      return state.filter(blogPost => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return (title, content) => {
    dispatch({ type: 'ADD_BLOGPOST', payload: { title, content } });
  };
};

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: 'DELETE_BLOGPOST', payload: id });
  };
};

const actions = {
  addBlogPost,
  deleteBlogPost
};

const initialState = [];

export const { Context, Provider } = createDataContext(
  blogReducer,
  actions,
  initialState
);
