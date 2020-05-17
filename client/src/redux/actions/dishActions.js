import axios from 'axios';

export const getDishes = () => {
    return {
        axios
            .get('/api/'),
    }
}