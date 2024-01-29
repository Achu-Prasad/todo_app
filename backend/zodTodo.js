const zod = require('zod');

const updateTodo = zod.object({
    title:zod.string().optional(),
    description:zod.string().optional(),
    completed:zod.boolean()
})
const 