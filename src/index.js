const formatPhone = (phone = '') => {
    const removeLeftZero = phone => (`${phone}`.charAt(0) === '0' ? `${phone}`.slice(1) : `${phone}`)
    const getFormattedPhone = phone => {
        switch (phone.length) {
        case 8:
            return `${phone.substring(0, 4)}-${phone.substring(4)}`
        case 9:
            return `${phone.substring(0, 5)}-${phone.substring(5)}`
        case 10:
            return `(${phone.substring(0, 2)}) ${phone.substring(2, 6)}-${phone.substring(6)}`
        case 11:
            return `(${phone.substring(0, 2)}) ${phone.substring(2, 7)}-${phone.substring(7)}`
        default:
            return phone
        }
    }
    try {
        return getFormattedPhone(removeLeftZero(phone))
    } catch (e) {
        return phone
    }
}

const formatZipCode = (value) => {
    const cep = String(value)
    return `${cep.substring(0,2)}.${cep.substring(2, 5)}-${cep.substring(5,8)}` 
}
    

const formatCPF = (value) => {
    const cpf = String(value)
    if (!cpf) return ''
    return cpf.toString().replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
}

const formatCNPJ = (value) => {
    const cnpj = String(value)
    if (!cnpj) return ''
    return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5')
}

const formatPlate = (value) => {
    const regexPlate = /^[a-zA-Z]{3}[0-9]{4}$/
    if (!value) return ''
    if (regexPlate.test(value)) return (`${value.substr(0, 3)}-${value.substr(3)}`).toUpperCase()
    return value.toUpperCase()
}

const formatDocument = (value) => {
    const document = String(value)
    if (!document) return ''
    if (document.length < 14) { return formatCPF(document)}
    return formatCNPJ(document)
}

const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

const formatGender = (value) => {
    if (!value) return 'NÃO INFORMADO'
    if (value === 'm') return 'MASCULINO'
    if (value === 'f') return 'FEMININO'
    if (value !== 'm' && value !== 'f') return 'OUTRO'
}

export {
    formatPhone,
    formatZipCode,
    formatCPF,
    formatCNPJ,
    formatPlate,
    formatDocument,
    formatCurrency,
    formatGender
}
