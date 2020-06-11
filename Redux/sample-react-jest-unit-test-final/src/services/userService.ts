
interface User {
    id: number,
    name: string
}

const users: Array<User> = [
    { id: 1, name: "Mark" },
    { id: 2, name: "Michael" }
];

export function getUsers(): Promise<User[]> {
    return new Promise((resolve, reject) => {
        process.nextTick(() =>
            users
                ? resolve(users)
                : reject({
                    error: 'Unable to load users',
                }),
        );
    });
}
export function getUserById(userID: number): Promise<User> {
    return new Promise((resolve, reject) => {
        const user = users.filter(user=> user.id == userID)[0];
        process.nextTick(() =>
               user
                ? resolve(user)
                : reject({
                    error: 'User with ' + userID + ' not found.',
                }),
        );
    });
}

