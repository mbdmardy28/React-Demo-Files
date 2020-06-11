import { getUsers, getUserById } from './userService';

describe("userService", () => { 
  it('getUsers should fetch list of users', () => {
    return getUsers().then(data => {
        expect(data).toHaveLength(2);
    })    
  })  

  it('getUsers should fetch list of users', () => {
     expect(getUsers()).resolves.toHaveLength(2);
  })  

  it('getUserById should return user when userId is valid', () => {
    expect(getUserById(5)).resolves.toHaveProperty('error');
 })

 it('getUserById should  return error when the userId is not exist', () => {
    expect(getUserById(5)).rejects.toHaveProperty('error');
 })

  it('getUsers should return users using async await', async () => {
      const users = await getUsers();
      expect(users).toHaveLength(2);
  })

  it('getUserById should return error when the user is not exist using async await', async () => {
   await expect(getUserById(5)).rejects.toHaveProperty('error');
})
})