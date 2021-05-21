const KEYS = {
    provider: 'provider',
    providerId: 'providerId'
}


export const getDepartmentCollection = ()=>([
    { id: '0', title: 'Seamstress' },
    { id: '1', title: 'Beauty Services' },
    { id: '2', title: 'Barber' },
    { id: '3', title: 'Sanitization Services' },
    { id: '4', title: 'Doctors' },
    { id: '5', title: 'Home Cleaning' },
    { id: '6', title: 'Car Wash' },
    { id: '7', title: 'Maids' },
    { id: '8', title:  'Massages'},
    { id: '9', title: 'Real Estate Agent'},
    
   
])
export function insertProvider(data) {
    let provider = getAllProvider();
    data['id'] = generateProviderId()
    provider.push(data)
    localStorage.setItem(KEYS.provider, JSON.stringify(provider))
}
export function updateProvider(data) {
    let provider = getAllProvider();
    let recordIndex = provider.findIndex(x => x.id == data.id);
    provider[recordIndex] = { ...data }
    localStorage.setItem(KEYS.provider, JSON.stringify(provider));
}
export function deleteProvider(id) {
    let provider = getAllProvider();
    provider = provider.filter(x => x.id != id)
    localStorage.setItem(KEYS.provider, JSON.stringify(provider));
}
export function generateProviderId() {
    if (localStorage.getItem(KEYS.providerId) == null)
        localStorage.setItem(KEYS.providerId, '0')
    var id = parseInt(localStorage.getItem(KEYS.providerId))
    localStorage.setItem(KEYS.providerId, (++id).toString())
    return id;
}

export function getAllProvider() {
    if (localStorage.getItem(KEYS.provider) == null)
        localStorage.setItem(KEYS.provider, JSON.stringify([]))
    let provider = JSON.parse(localStorage.getItem(KEYS.provider));
    //map departmentID to department title
    let department = getDepartmentCollection();
    return provider.map(x => ({
        ...x,
        department: department[x.departmentId - 1].title
    }))
    //return JSON.parse(localStorage.getItem(KEYS.admin));
}   