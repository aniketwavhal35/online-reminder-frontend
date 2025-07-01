import { Reminder } from "./reminder";

export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    password?: string; // Optional field for password
}
