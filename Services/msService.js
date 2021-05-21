const KEYS = {
    ms: 'ms',
    msId: 'msId'
}


export const getDepartmentCollection = ()=>([
    { id: '1', title: 'Super Admin' },
    { id: '2', title: 'Bullding Admin' },
    { id: '3', title: 'Dispatcher Admin' },
   
])
export function insertMS(data) {
    let ms = getAllMS();
    data['id'] = generateMSId()
    ms.push(data)
    localStorage.setItem(KEYS.ms, JSON.stringify(ms))
}
export function updateMS(data) {
    let ms = getAllMS();
    let recordIndex = ms.findIndex(x => x.id == data.id);
    ms[recordIndex] = { ...data }
    localStorage.setItem(KEYS.ms, JSON.stringify(ms));
}
export function deleteMS(id) {
    let ms = getAllMS();
  ms = ms.filter(x => x.id != id)
    localStorage.setItem(KEYS.ms, JSON.stringify(ms));
}
export function generateMSId() {
    if (localStorage.getItem(KEYS.msId) == null)
        localStorage.setItem(KEYS.msId, '0')
    var id = parseInt(localStorage.getItem(KEYS.msId))
    localStorage.setItem(KEYS.msId, (++id).toString())
    return id;
}

export function getAllMS() {
    if (localStorage.getItem(KEYS.ms) == null)
        localStorage.setItem(KEYS.ms, JSON.stringify([]))
    let ms = JSON.parse(localStorage.getItem(KEYS.ms));
    //map departmentID to department title
    let departments = getDepartmentCollection();
    return ms.map(x => ({
        ...x,
    department: departments[x.departmentId - 1].title
    }))
    //return JSON.parse(localStorage.getItem(KEYS.admin));
}   