import type { User } from "@/interfaces/user.interface";

//Login, Register and check status
export interface AuthResponse {
    user:  User;
    token: string;
}
