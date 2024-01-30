const {z} = require('zod');

const updateTodo = z.object({
    title:z.string().optional(),
    description:z.string().optional(),
    completed:z.boolean()
})
const createTodo = z.object({
    title:z.string(),
    description:z.string(),
    completed:z.boolean(),
});

module.exports = {updateTodo,createTodo}