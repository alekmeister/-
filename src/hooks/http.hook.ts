import { useEffect, useState } from 'react';
import axios from 'axios';

// export const useAxiosGet = (url: string) => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState('');
//   const [loaded, setLoaded] = useState(false);
//   useEffect(() => {
//     axios
//       .get(url)
//       .then((response) => setData(response.data))
//       .catch((error) => setError(error.message))
//       .finally(() => setLoaded(true));
//   }, []);
//   return { data, error, loaded };
// };

// СreateSyncThunk
// Делашеь стор под вещи
// items?page=1&limit=8
// const BASE_API = https://62b0b45e196a9e9870296581.mockapi.io/

// const getClothes = createAsyncThunk(
//     'clothes/getClothes',
//     async ({page,limit},{{rejectWithValue }) => {
//       try{
//         const URL = `${https://62b0b45e196a9e9870296581.mockapi.io/}/clothes?page={page}&limit={limit}`
//         const response = await axios.get(URL)
//         return reponse.data
//       } catch(error){
//         return rejectWithValue(error.response.data)
//       }
//     }
//
//     }
// )
