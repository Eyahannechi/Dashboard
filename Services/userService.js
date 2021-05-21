const KEYS = {
    user: 'user',
    userId: 'userId'
}


export const getDepartmentCollection = ()=>([
    { id: '1', title: 'Super Admin' },
    { id: '2', title: 'Bullding Admin' },
    { id: '3', title: 'Dispatcher Admin' },
   
])
export function insertUser(data) {
    let user = getAllUser();
    data['id'] = generateUserId()
    user.push(data)
    localStorage.setItem(KEYS.user, JSON.stringify(user))
}
export function updateUser(data) {
    let user = getAllUser();
    let recordIndex = user.findIndex(x => x.id == data.id);
    user[recordIndex] = { ...data }
    localStorage.setItem(KEYS.user, JSON.stringify(user));
}
export function deleteUser(id) {
    let user= getAllUser();
    user = user.filter(x => x.id != id)
    localStorage.setItem(KEYS.user, JSON.stringify(user));
}
export function generateUserId() {
    if (localStorage.getItem(KEYS.userId) == null)
        localStorage.setItem(KEYS.userId, '0')
    var id = parseInt(localStorage.getItem(KEYS.userId))
    localStorage.setItem(KEYS.userId, (++id).toString())
    return id;
}

export function getAllUser() {
    if (localStorage.getItem(KEYS.user) == null)
        localStorage.setItem(KEYS.user, JSON.stringify([]))
    let user = JSON.parse(localStorage.getItem(KEYS.user));
    //map departmentID to department title
    let departments = getDepartmentCollection();
    return user.map(x => ({
        ...x,
    department: departments[x.departmentId - 1].title
    }))
    //return JSON.parse(localStorage.getItem(KEYS.admin));
}   