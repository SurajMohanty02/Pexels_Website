import axios from "axios";
// const a = "  rIePcbu4wbWhvvJDe7RbzuBao0226WpKfA6mIhXUHVQ";
export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID 8GGexEMyK_A9e7DoflmA3XSuvJ5fYHzcgARoFWw-hB",
  },
});
