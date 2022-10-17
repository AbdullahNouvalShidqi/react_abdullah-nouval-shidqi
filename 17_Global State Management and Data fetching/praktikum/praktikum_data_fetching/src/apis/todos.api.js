import axiosInstance from "../config/axiosInstance";

const TodosAPI = {
    async getTodos(){
        try{
            const response = await axiosInstance.get('/todos');
            console.log(response.data);
            return response;
        } catch(err) {
            const { message } = err.response.data;
            console.log(message);
        }
    }
}

export default TodosAPI;