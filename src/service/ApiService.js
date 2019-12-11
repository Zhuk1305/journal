import axios from 'axios';

const TRAINER_API_BASE_URL = 'http://localhost:8080/trainers';

class ApiService {

    fetchTrainers() {
        return axios.get(TRAINER_API_BASE_URL);
    }

    fetchTrainerById(trainerId) {
        return axios.get(TRAINER_API_BASE_URL + '/' + trainerId);
    }

    deleteTrainer(trainerId) {
        return axios.delete(TRAINER_API_BASE_URL + '/' + trainerId);
    }

    addTrainer(trainer) {
        return axios.post(""+TRAINER_API_BASE_URL, trainer);
    }

    editTrainer(trainer) {
        return axios.put(TRAINER_API_BASE_URL + '/' + trainer.id, trainer);
    }

}

export default new ApiService();