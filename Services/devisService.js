const KEYS = {
     devis  : 'devis',
    devisId: 'devisId'
}


export const getDepartmentCollection = ()=>([
    { id: '1', title: 'Super Admin' },
    { id: '2', title: 'Bullding Admin' },
    { id: '3', title: 'Dispatcher Admin' },
   
])
export function insertDevis(data) {
    let devis = getAllDevis();
    data['id'] = generateDevisId()
    devis.push(data)
    localStorage.setItem(KEYS.devis, JSON.stringify(devis))
}
export function updateDevis(data) {
    let devis = getAllDevis();
    let recordIndex = devis.findIndex(x => x.id == data.id);
    devis[recordIndex] = { ...data }
    localStorage.setItem(KEYS.devis, JSON.stringify(devis));
}
export function deleteDevis(id) {
    let devis= getAllDevis();
    devis = devis.filter(x => x.id != id)
    localStorage.setItem(KEYS.devis, JSON.stringify(devis));
}
export function generateDevisId() {
    if (localStorage.getItem(KEYS.devisId) == null)
        localStorage.setItem(KEYS.devisId, '0')
    var id = parseInt(localStorage.getItem(KEYS.devisId))
    localStorage.setItem(KEYS.devisId, (++id).toString())
    return id;
}

export function getAllDevis() {
    if (localStorage.getItem(KEYS.devis) == null)
        localStorage.setItem(KEYS.devis, JSON.stringify([]))
    let devis = JSON.parse(localStorage.getItem(KEYS.devis));
    //map departmentID to department title
    let departments = getDepartmentCollection();
    return devis.map(x => ({
        ...x,
    department: departments[x.departmentId - 1].title
    }))
    //return JSON.parse(localStorage.getItem(KEYS.admin));
}   