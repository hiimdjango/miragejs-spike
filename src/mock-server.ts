import { createServer } from "miragejs";

export const server = () => createServer({
    routes() {
        this.get("/api/reminders", () => ({
            reminders: [1, 2, 3, 4, 5, 6, 7, 8],
        }))
    },
})
