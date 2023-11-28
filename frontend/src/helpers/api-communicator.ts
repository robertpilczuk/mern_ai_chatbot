import axios from "axios";
export const loginUser = async (email: string, password: string) => {
    const res = await axios.post("/user/login", { email, password });
    if (res.status !== 200) {
        throw new Error("Unable to login");
    }
    const data = await res.data;
    return data;
};

export const checkAuthStatus = async () => {
    const res = await axios.get("/user/auth-status");
    if (res.status !== 200) {
        throw new Error("Unable to authenticate");
    }
    const data = await res.data;
    return data;
};

export const sendChatRequest = async (message: string) => {
    try {
        const res = await axios.post("/chat/new", { message });
        return res.data;
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                if (error.response.status === 401) {
                    console.error("Błąd autoryzacji:", error.response.data);
                    throw new Error("Błąd autoryzacji");
                } else {
                    console.error("Błąd HTTP:", error.response.status);
                    console.error("Wiadomość błędu:", error.response.data);
                    throw new Error("Nie udało się wysłać wiadomości");
                }
            } else if (error.request) {
                console.error("Brak odpowiedzi od serwera");
                throw new Error("Brak odpowiedzi od serwera");
            } else {
                console.error("Niespodziewany błąd:", error.message);
                throw new Error("Wystąpił niespodziewany błąd");
            }
        } else {
            console.error("Niespodziewany błąd:", error);
            throw new Error("Wystąpił niespodziewany błąd");
        }
    }
};



export const getUserChats = async () => {
    const res = await axios.get("/chat/all-chats" );
    if (res.status !== 200) {
        throw new Error("Unable to send chat");
    }
    const data = await res.data;
    return data;
};

export const deleteUserChats = async () => {
    const res = await axios.delete("/chat/delete" );
    if (res.status !== 200) { 
        throw new Error("Unable to delete chat");
    }
    const data = await res.data;
    return data;
};

export const logoutUser = async () => {
    const res = await axios.get("/user/logout" );
    if (res.status !== 200) { 
        throw new Error("Unable to delete chat");
    }
    const data = await res.data;
    return data;
};
