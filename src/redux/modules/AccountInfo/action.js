import axios from 'axios'
// import reposService from './service'

export const increase = (payload) => ({
  type: 'INCREASE',
  payload: payload
})

// export const getReposByUsername = async (dispatch, username) => {
//     //Set the applications to a "Loading" state
//     dispatch({ type: 'REPOS_REQUEST' });

//     try {
//       const response = await axios(`https://api.github.com/users/${username}/repos`);
//       const repos = response.data;
//       const isReposEmpty = repos.length === 0;
//       if (isReposEmpty) dispatch({ type: REPOS_EMPTY });
//       else
//         dispatch({
//           type: 'REPOS_SUCCESS',
//           repos
//         });
//     } catch (error) {
//       const isError404 = error.response && error.response.status === 404;
//       if (isError404) dispatch({ type: REPOS_NOT_FOUND });
//       else dispatch({ type: REPOS_ERROR });
//     }
//   };

export const asyncApiCallPromise = (values) => {
  return dispatch => {
    return axios.get(url)
      .then(response => {
        dispatch(successHandle(response));
      })
      .catch(error => {
        dispatch(errorHandle(error));
      });
  }
}

export const tempAction = (data) => {
  return {
    type: 'TEST_JA',
    data
  }
}

export const asyncApiCall = async (values, dispatch) => {
  try {
    const response = await axios.get(`http://dummy.restapiexample.com/api/v1/employees`)
    // dispatch(successHandle(response))
    dispatch(tempAction(response))
    console.log('response', response)
  }
  catch (error) {
    console.log('errorr jaaa')
    // dispatch(errorHandle(error));
  }

}
  // console.log('values', values)
  // return async dispatch => {
  //   try {
  //     const response = await axios.get(`https://api.github.com/users/${values}/repos`)
  //     // dispatch(successHandle(response))
  //     console.log('response', response)
  //   }
  //   catch(error) {
  //     console.log('errorr jaaa')
  //     // dispatch(errorHandle(error));
  //   }
  //   // return 'done';
  // }
// }

// export const getReposByUsernameInjector = dispatch => {
//     return username => {
//         getReposByUsername(dispatch, username);
//     };
// };

// const repoService = axios = ({
//     haha: async username => axios.get(`https://api.github.com/users/${username}/repos`)
// })

// export const getRepoByUsername = async (dispatch, repoService, username) => {
//     dispatch({ type: 'GET_REPO'})
//     try {
//         const res = await repoService.getRepoByUsername(username)
//         console.log('res jaaa', res)
//         const repo = res.data
//     }
// }

// export const getRepo = (username) => ({
//     type: 'GET_REPO',
//     payload: username
// })

// export const getReposByUsername = async (dispatch, reposService, username) => {
//     //Set the applications to a "Loading" state
//     // dispatch({ type: REPOS_REQUEST });

//     try { 
//       const response = await reposService.getResposByUserName(username);
//       const repos = response.data;
//       const isReposEmpty = repos.length === 0;
//       if (isReposEmpty) dispatch({ type: REPOS_EMPTY });
//       else
//       dispatch({ type: 'REPOS_REQUEST' });
//     } catch (error) {
//       const isError404 = error.response && error.response.status === 404;
//       if (isError404) dispatch({ type: REPOS_NOT_FOUND });
//       else dispatch({ type: REPOS_ERROR });
//     }
//   };


// export const getRepo = dispatch => {
//     return username => {
//       getRepoByUsername(dispatch, reposService, username);
//     };
//   }

// export const getRepo = (dispatch) => {

// }