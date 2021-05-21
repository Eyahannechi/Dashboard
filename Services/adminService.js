const KEYS = {
    admin: 'admin',
    adminId: 'adminId'
}


export const getDepartmentCollection = ()=>([
    { id: '1', title: 'Super Admin' },
    { id: '2', title: 'Bullding Admin' },
    { id: '3', title: 'Dispatcher Admin' },
   
])
export function insertAdmin(data) {
    let admin = getAllAdmin();
    data['id'] = generateAdminId()
    admin.push(data)
    localStorage.setItem(KEYS.admin, JSON.stringify(admin))
}
export function updateAdmin(data) {
    let admin = getAllAdmin();
    let recordIndex = admin.findIndex(x => x.id == data.id);
    admin[recordIndex] = { ...data }
    localStorage.setItem(KEYS.admin, JSON.stringify(admin));
}
export function deleteAdmin(id) {
    let admin = getAllAdmin();
    admin = admin.filter(x => x.id != id)
    localStorage.setItem(KEYS.admin, JSON.stringify(admin));
}
export function generateAdminId() {
    if (localStorage.getItem(KEYS.adminId) == null)
        localStorage.setItem(KEYS.adminId, '0')
    var id = parseInt(localStorage.getItem(KEYS.adminId))
    localStorage.setItem(KEYS.adminId, (++id).toString())
    return id;
}

export function getAllAdmin() {
    if (localStorage.getItem(KEYS.admin) == null)
        localStorage.setItem(KEYS.admin, JSON.stringify([]))
    let admin = JSON.parse(localStorage.getItem(KEYS.admin));
    //map departmentID to department title
    let departments = getDepartmentCollection();
    return admin.map(x => ({
        ...x,
    department: departments[x.departmentId - 1].title
    }))
    //return JSON.parse(localStorage.getItem(KEYS.admin));
}   