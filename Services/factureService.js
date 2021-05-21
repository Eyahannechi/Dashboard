const KEYS = {
    facture: 'facture',
    factureId: 'factureId'
}


export const getDepartmentCollection = ()=>([
    { id: '1', title: 'Super Admin' },
    { id: '2', title: 'Bullding Admin' },
    { id: '3', title: 'Dispatcher Admin' },
   
])
export function insertFacture(data) {
    let facture = getAllFacture();
    data['id'] = generateFactureId()
    facture.push(data)
    localStorage.setItem(KEYS.facture, JSON.stringify(facture))
}
export function updateFacture(data) {
    let facture = getAllFacture();
    let recordIndex = facture.findIndex(x => x.id == data.id);
    facture[recordIndex] = { ...data }
    localStorage.setItem(KEYS.facture, JSON.stringify(facture));
}
export function deleteFacture(id) {
    let facture= getAllFacture();
    facture = facture.filter(x => x.id != id)
    localStorage.setItem(KEYS.facture, JSON.stringify(facture));
}
export function generateFactureId() {
    if (localStorage.getItem(KEYS.factureId) == null)
        localStorage.setItem(KEYS.factureId, '0')
    var id = parseInt(localStorage.getItem(KEYS.factureId))
    localStorage.setItem(KEYS.factureId, (++id).toString())
    return id;
}

export function getAllFacture() {
    if (localStorage.getItem(KEYS.facture) == null)
        localStorage.setItem(KEYS.facture, JSON.stringify([]))
    let facture = JSON.parse(localStorage.getItem(KEYS.facture));
    //map departmentID to department title
    let departments = getDepartmentCollection();
    return facture.map(x => ({
        ...x,
    department: departments[x.departmentId - 1].title
    }))
    //return JSON.parse(localStorage.getItem(KEYS.admin));
}   