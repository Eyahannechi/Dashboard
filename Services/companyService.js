const KEYS = {
    company: 'company',
    companyId: 'companyId'
}

export const getDepartmentCollection = () => ([
    { id: '1', title: 'Development' },
    { id: '2', title: 'Marketing' },
    { id: '3', title: 'Accounting' },
    { id: '4', title: 'HR' },
])

export function insertCompany(data) {
    let company = getAllCompany();
    data['id'] = generateCompanyId()
    company.push(data)
    localStorage.setItem(KEYS.company, JSON.stringify(company))
}

export function updateCompany(data) {
    let company = getAllCompany();
    let recordIndex = company.findIndex(x => x.id == data.id);
    company[recordIndex] = { ...data }
    localStorage.setItem(KEYS.company, JSON.stringify(company));
}

export function deleteCompany(id) {
    let company = getAllCompany();
    company = company.filter(x => x.id != id)
    localStorage.setItem(KEYS.company, JSON.stringify(company));
}

export function generateCompanyId() {
    if (localStorage.getItem(KEYS.companyId) == null)
        localStorage.setItem(KEYS.companyId, '0')
    var id = parseInt(localStorage.getItem(KEYS.companyId))
    localStorage.setItem(KEYS.companyId, (++id).toString())
    return id;
}

export function getAllCompany() {
    if (localStorage.getItem(KEYS.company) == null)
       localStorage.setItem(KEYS.company, JSON.stringify([]))
       return JSON.parse(localStorage.getItem(KEYS.company))
        {/* let company = JSON.parse(localStorage.getItem(KEYS.company));
      //map departmentID to department title
         let departments = getDepartmentCollection();
    return company.map(x => ({
       ...x,
        department: departments[x.departmentId - 1].title
    }))*/}
}

