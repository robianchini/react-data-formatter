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

const formatZipCode = (zipCode) => {
    if (!value) return ''
    return zipCode.replace(/^([\d]{2})\.?([\d]{3})\-?([\d]{3})/)
}
    

const formatCPF = (value) => {
    if (!value) return ''
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
}

const formatCNPJ = (value) => {
    if (!value) return ''
    return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5')
}

const formatPlate = (value) => {
    const regexPlate = /^[a-zA-Z]{3}[0-9]{4}$/
    if (!value) return ''
    if (regexPlate.test(value)) return (`${value.substr(0, 3)}-${value.substr(3)}`).toUpperCase()
    return value.toUpperCase()
}

const formatDocument = (value) => {
    if (!value) return ''
  
    if (value.length === 11) {
      return formatCPF(value)
    }
  
    return formatCNPJ(value)
}

export {
    formatPhone,
    formatZipCode,
    formatCPF,
    formatCNPJ,
    formatPlate,
    formatDocument,
}
